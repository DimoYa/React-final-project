import { useState } from 'react';

export const Login = () => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: '',
    password: '',
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

  const emailvalidator = (e) => {
    setErrors((state) => ({
      ...state,
      [e.target.name]: (!/\S+@\S+/.test(values[e.target.name]))
    }));
  };

  const requiredField = (e) => {
    setErrors(state => ({
        ...state,
        [e.target.name]: values[e.target.name].length < 1,
    }));
}

  
  const { email, password } = values;
  const required =
  email.length > 0 &&
  password.length > 0;
  
  
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
              name="email"
              id="email"
              placeholder="user@gmail.com"
              value={values.email}
              onChange={changeHandler}
              onBlur={(e) => emailvalidator(e)}
            />
          </p>

          {errors.email && (
            <p className="alert alert-danger">
              Email is not valid!!
            </p>
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
            <p className="alert alert-danger">
              Field is required!!
            </p>
          )}

          <button className="btn btn-primary btn-block" disabled={!isFormValid}>
            Login
          </button>

          <p className="text-center">
            Don't have an account?
            <a href="/user/register">Register</a>
          </p>
        </fieldset>
      </div>
    </form>
  );
};
