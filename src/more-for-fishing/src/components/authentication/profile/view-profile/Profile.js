import './Profile.css';

import * as authenticationService from '../../../../services/authenticationService';
import * as userService from '../../../../services/userService';

import defaultAvatarPath from '../../../../assets/default-avatar-profile.png';
import { useEffect, useState } from 'react';
import { Loading } from '../../../shared/Loading';
import { Link } from 'react-router-dom';

export const Profile = () => {
  const userId = authenticationService.returnId();
  const isAdmin = authenticationService.isAdmin();

  const [user, setUser] = useState({});

  useEffect(() => {
    userService
      .getUser(userId)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  

  return (
    <div className="profile">
      <div className="container">
        {Object.keys(user).length === 0 ? (
          <Loading />
        ) : (
          <>
            <img
              src={
                user.photo === 'null' || user.photo === ''
                  ? defaultAvatarPath
                  : user.photo
              }
              alt="default user"
            />
            <h3>User Info:</h3>
            <div className="flex">
              <p>Username: </p>
              <p>{user.username}</p>
            </div>
            <div className="flex">
              <p>Full Name: </p>
              <p>{user.fullname}</p>
            </div>
            <div className="flex">
              <p>Phone: </p>
              {user.phoneNumber && (
                <p>
                  {user.phoneCode} {user.phoneNumber}
                </p>
              )}
            </div>
            <hr />
            <div id="buttons">
              <Link
                className="btn btn-success"
                to={`/user/profile/edit/${userId}`}
              >
                Update profile
              </Link>
              {isAdmin && (
                <button type="button" className="btn btn-danger">
                  Delete profile
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
