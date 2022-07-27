import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';

import * as authenticationService from '../../../services/authenticationService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    authenticationService
      .login(values)
      .then(() => {
        toast.success('Successfully Login!');
        navigate('/');
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const requiredField = (e) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: values[e.target.name].length < 1,
    }));
  };

  const { username, password } = values;
  const required = username.length > 0 && password.length > 0;

  const isFormValid = required && !Object.values(errors).some((x) => x);

  return (
    <form className="login" onSubmit={submitHandler}>
      <div className="container">
        <fieldset>
          <h2>Login Form</h2>

          {/* email */}
          <p className="field field-icon">
            <label htmlFor="email">
              <span>
                <i className="fas fa-envelope"></i>
              </span>
            </label>
            <input
              type="email"
              name="username"
              id="email"
              placeholder="user@gmail.com"
              value={values.username}
              onChange={changeHandler}
              onBlur={(e) => requiredField(e)}
            />
          </p>

          {errors.username && (
            <p className="alert alert-danger">Field is required!!</p>
          )}

          {/* password */}
          <p className="field field-icon">
            <label htmlFor="password">
              <span>
                <i className="fas fa-lock"></i>
              </span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="******"
              value={values.password}
              onChange={changeHandler}
              onBlur={(e) => requiredField(e)}
            />
          </p>

          {errors.password && (
            <p className="alert alert-danger">Field is required!!</p>
          )}

          <button className="btn btn-primary btn-block" disabled={!isFormValid}>
            Login
          </button>

          <p className="text-center">
            Don't have an account?
            <Link to="/user/register">Register</Link>
          </p>
        </fieldset>
      </div>
    </form>
  );
};
