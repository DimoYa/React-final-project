import { Loading } from '../../../shared/Loading';
import * as userService from '../../../../services/userService';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const codes = [
  { value: '+44', label: '+44' },
  { value: '+359', label: '+359' },
  { value: '+33', label: '+33' },
];

export const EditProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

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

  const [user, setUser] = useState({});

  const changeHandler = (e) => {
    setUser((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const editHandler = (e) => {
    e.preventDefault();

    const body = {
      fullname: user.fullname,
      phoneCode: user.phoneCode,
      phoneNumber: user.phoneNumber,
      photo: user.photo,
    };

    userService
      .updateUser(userId, body)
      .then(() => {
        localStorage['photo'] = body.photo;
        navigate('/user/profile');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={editHandler}>
      <div className="container updateProfile">
        <fieldset>
          <h3>
            Update user info - <b>{user.username}</b>
          </h3>
          {Object.keys(user).length === 0 ? (
            <Loading />
          ) : (
            <>
              {/* fullname */}
              <p className="field field-icon">
                <label htmlFor="fullname">
                  <span>
                    <i className="fas fa-user" />
                  </span>
                </label>
                <input
                  name="fullname"
                  placeholder="Full Name"
                  defaultValue={user.fullname || ''}
                  onChange={changeHandler}
                />
              </p>

              {/* phone */}
              <p className="field field-icon">
                <label htmlFor="phoneNumber">
                  <span>
                    <i className="fas fa-phone" />
                  </span>
                </label>
                <select
                  name="phoneCode"
                  defaultValue={user.phoneCode}
                  onChange={changeHandler}
                >
                  {codes.map((e, key) => {
                    return (
                      <option
                        key={key}
                        value={e.value}
                        selected={e.value === user.phoneCode}
                      >
                        {e.label}
                      </option>
                    );
                  })}
                </select>
                <input
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone number"
                  onChange={changeHandler}
                  defaultValue={user.phoneNumber}
                />
              </p>
              <p className="field field-icon">
                <label htmlFor="photo">
                  <span>
                    <i className="fa fa-image" />
                  </span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Add image link"
                  onChange={changeHandler}
                  defaultValue={user.photo}
                />
              </p>
              <div className="buttons">
                <button className="btn btn-warning">Cancel </button>
                &nbsp;
                <button type="submit" className="btn btn-primary">
                  Update Account
                </button>
              </div>
            </>
          )}
        </fieldset>
      </div>
    </form>
  );
};
