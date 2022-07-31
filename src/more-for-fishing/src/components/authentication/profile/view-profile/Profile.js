import './Profile.css';

import * as userService from '../../../../services/userService';

import defaultAvatarPath from '../../../../assets/default-avatar-profile.png';
import { useContext, useEffect, useState } from 'react';
import { Loading } from '../../../shared/Loading';
import { Link, useNavigate } from 'react-router-dom';

import { submitHandler } from '../../../shared/confirm-box/Confirm';
import { AuthContext } from '../../../../context/AuthContext';
import { toast } from 'react-toastify';

export const Profile = () => {
  const { user, userLogout } = useContext(AuthContext);
  const userId = user.id;
  const isAdmin = user.isAdmin;

  const [userProfile, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    userService
      .getUser(userId)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        toast.error(err);
      });
  }, []);

  const deleteHandler = () => {
    submitHandler(
      confirmDeleteHandler,
      'Confirm deletion',
      'Are you sure that you want to delete your profile?'
    );
  };

  const confirmDeleteHandler = () => {
    userService
      .deleteUser(userId)
      .then(() => {
        userLogout();
        localStorage.clear();
        navigate('/');
        toast.success('Successfully deleted profile!');
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <div className="profile">
      <div className="container">
        {Object.keys(userProfile).length === 0 ? (
          <Loading />
        ) : (
          <>
            <img
              src={
                userProfile.photo === 'null' || userProfile.photo === ''
                  ? defaultAvatarPath
                  : userProfile.photo
              }
              alt="default user"
            />
            <h3>User Info:</h3>
            <div className="flex">
              <p>Username: </p>
              <p>{userProfile.username}</p>
            </div>
            <div className="flex">
              <p>Full Name: </p>
              <p>{userProfile.fullname}</p>
            </div>
            {userProfile.phoneNumber && (
              <div className="flex">
                <p>Phone: </p>
                <p>
                  {userProfile.phoneCode} {userProfile.phoneNumber}
                </p>
                )
              </div>
            )}
            <hr />
            <div id="buttons">
              <Link
                className="btn btn-success"
                to={`/user/profile/edit/${userId}`}
              >
                Update profile
              </Link>
              {!isAdmin && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={deleteHandler}
                >
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
