import { Link } from 'react-router-dom';

import { useState } from 'react';

export const Register = () => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: '',
    fullname: '',
    phoneCode: '+359',
    phoneNumber: '',
    photoUrl: '',
    password: '',
    rePassword: '',
  });

  const changeHandler = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(values);
  };

  const emailValidator = (e) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: !/\S+@\S+/.test(values[e.target.name]),
    }));
  };

  const fullNameValidator = (e) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: !/^([A-Z][a-z]+\s[A-Z][a-z]+)$/.test(
        values[e.target.name]
      ),
    }));
  };

  const phoneValidator = (e) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: !/^\d{9}$/.test(values[e.target.name]),
    }));
  };

  const comparePasswordValidator = (e, password) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: values[e.target.name] !== password,
    }));
  };

  const minLendValidator = (e, len) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: values[e.target.name].length < len,
    }));
  };

  const { email, fullname, password, rePassword } = values;
  const required = email && fullname && password && password && rePassword;

  const isFormValid = required && !Object.values(errors).some((x) => x);

  return (
    <form className="register" onSubmit={submitHandler}>
      <div className="container">
        <fieldset>
          <h2>Registration Form</h2>

          {/* email */}
          <p className="field field-icon">
            <label htmlFor="email">
              <span>
                <i className="fas fa-envelope"></i>
              </span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="user@gmail.com"
              value={values.email}
              onChange={changeHandler}
              onBlur={(e) => emailValidator(e)}
            />
          </p>

          {errors.email && (
            <p className="alert alert-danger">Email is not valid!!</p>
          )}

          {/* fullname */}
          <p className="field field-icon">
            <label htmlFor="fullname">
              <span>
                <i className="fas fa-user"></i>
              </span>
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="FirstName LastName"
              value={values.fullname}
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
              value={values.pho}
              onChange={changeHandler}
            >
              <option value="bg">+359</option>
              <option value="gb">+44</option>
              <option value="fr">+33</option>
            </select>
            <input
              type="phoneNumber"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="885 888 888"
              value={values.phoneNumber}
              onChange={changeHandler}
              onBlur={(e) => phoneValidator(e)}
            />
          </p>

          {errors.phoneNumber && (
            <p className="alert alert-danger">Invalid phone number!</p>
          )}

          {/* photoUrl */}
          <p className="field field-icon">
            <label htmlFor="fullname">
              <span>
                <i className="fa fa-image"></i>
              </span>
            </label>
            <input type="text" name="photo" placeholder="Add image url" />
          </p>

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
              onBlur={(e) => minLendValidator(e, 3)}
            />
          </p>

          {errors.password && (
            <p className="alert alert-danger">
              Password should be at least 3 characters long!
            </p>
          )}

          {/* rePassword */}
          <p className="field field-icon">
            <label htmlFor="rePassword">
              <span>
                <i className="fas fa-lock"></i>
              </span>
            </label>
            <input
              type="password"
              name="rePassword"
              id="rePassword"
              placeholder="******"
              value={values.rePassword}
              onChange={changeHandler}
              onBlur={(e) => comparePasswordValidator(e, password)}
            />
          </p>

          {errors.rePassword && (
            <p className="alert alert-danger">Passwords does not match!</p>
          )}

          <button className="btn btn-primary btn-block" disabled={!isFormValid}>
            Create Account
          </button>

          <p className="text-center">
            Have an account?
            <Link to="/user/login">Log In</Link>
          </p>
        </fieldset>
      </div>
    </form>
  );
};
