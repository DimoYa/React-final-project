import { Loading } from '../../../shared/Loading';
import * as userService from '../../../../services/userService';

import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../context/AuthContext';


const codes = [
  { value: '+44', label: '+44' },
  { value: '+359', label: '+359' },
  { value: '+33', label: '+33' },
];

export const EditProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const { userPhoto } = useContext(AuthContext);

  useEffect(() => {
    userService
      .getUser(userId)
      .then((data) => {
        setUser(data);
        
      })
      .catch((err) => {
        console.log(err);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    setUser((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const fullNameValidator = (e) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: !/^([A-Z][a-z]+\s[A-Z][a-z]+)$/.test(
        user[e.target.name]
      ),
    }));
  };

  const phoneValidator = (e) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: !/^\d{9}$/.test(user[e.target.name]),
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
        userPhoto(body.photo);
        toast.success('Successfully updated profile!');
        navigate(`/user/profile/${userId}`);
      })
      .catch((err) => {
        toast.success(err);
      });
  };

  const isFormValid = user.fullname && !Object.values(errors).some((x) => x);

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
                  onBlur={(e) => fullNameValidator(e)}
                />
              </p>

              {errors.fullname && (
                <p className="alert alert-danger">
                  Full name input field must contain two names (letters only)
                  separated by a space!
                </p>
              )}

              {/* phoneNumber */}

              <p className="field field-icon">
                <label htmlFor="phoneNumber">
                  <span>
                    <i className="fas fa-phone"></i>
                  </span>
                </label>
                <select
                  name="phoneCode"
                  id="phoneCode"
                  className="phoneCode"
                  defaultValue={user.phoneCode}
                  onChange={changeHandler}
                >
                  {codes.map((e, key) => {
                    return (
                      <option key={key} value={e.value}  selected={e.value === user.phoneCode}>
                        {e.label}
                      </option>
                    );
                  })}
                </select>
                <input
                  type="phoneNumber"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="885 888 888"
                  defaultValue={user.phoneNumber}
                  onChange={changeHandler}
                  onBlur={(e) => phoneValidator(e)}
                />
              </p>

              {errors.phoneNumber && (
                <p className="alert alert-danger">Invalid phone number!</p>
              )}

              {/* photo */}
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
                <Link to={`/user/profile/${userId}`} style={{verticalAlign: 'bottom'}} className="btn btn-warning">Cancel</Link>
                &nbsp;
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!isFormValid}
                >
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
