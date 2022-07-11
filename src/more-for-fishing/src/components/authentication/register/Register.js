export const Register = () => {
  return (
    <form className="register">
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
            />
          </p>

          {/* <fullname */}
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
            />
          </p>

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
            >
              <option value="1"> </option>
              <option value="2"> </option>
            </select>
            <input
              type="phoneNumber"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="885 888 888"
            />
          </p>

          {/* photoUrl */}
          <p className="field field-icon">
            <label htmlFor="fullname">
              <span>
                <i className="fa fa-image"></i>
              </span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Add image url"
            />
          </p>

          {/* password */}

          <div formGroupName="passwords">
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
              />
            </p>

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
              />
            </p>
          </div>

          <button className="btn btn-primary btn-block">Create Account</button>

          <p className="text-center">
            Have an account?
            <a href="/user/login">Log In</a>
          </p>
        </fieldset>
      </div>
    </form>
  );
};
