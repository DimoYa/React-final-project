import './Profile.css';

import * as authenticationService from '../../../services/authenticationService';
import * as userService from '../../../services/userService';

import defaultAvatarPath from '../../../assets/default-avatar-profile.png';
import { useEffect, useState } from 'react';
import { Loading } from '../../shared/Loading';

export const Profile = () => {
  const userId = authenticationService.returnId();
  const isAdmin = authenticationService.isAdmin();

  const [user, setUser] = useState({});

  const getUser = async () => {
    userService
      .getUser(userId)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  console.log(user);

  return (
    <div className="profile">
      <div className="container">
        {Object.keys(user).length === 0 && (
            <>
            <Loading />
            </>
        )}
       {Object.keys(user).length !== 0 && (
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
          <button type="button" className="btn btn-success">
            Update profile
          </button>
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
