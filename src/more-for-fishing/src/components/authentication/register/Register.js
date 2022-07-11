export const Register = () => {
  return (
    <form className="register">
      <div className="container">
        <fieldset>
          <h2>Registration Form</h2>

          {/* email */}
          <p className="field field-icon">
            <label for="email">
              <span>
                <i className="fas fa-envelope"></i>
              </span>
            </label>
            <input
              formControlName="email"
              type="email"
              name="email"
              id="email"
              placeholder="user@gmail.com"
            />
          </p>

          {/* <fullname */}
          <p className="field field-icon">
            <label for="fullname">
              <span>
                <i className="fas fa-user"></i>
              </span>
            </label>
            <input
              formControlName="fullname"
              type="text"
              name="fullname"
              id="fullname"
              placeholder="FirstName LastName"
            />
          </p>

          {/* phoneNumber */}
          <p className="field field-icon">
            <label for="phoneNumber">
              <span>
                <i className="fas fa-phone"></i>
              </span>
            </label>
            <select
              formControlName="phoneCode"
              name="phoneCode"
              id="phoneCode"
              className="phoneCode"
            >
              <option value="1"> </option>
              <option value="2"> </option>
            </select>
            <input
              formControlName="phoneNumber"
              type="phoneNumber"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="885 888 888"
            />
          </p>

          {/* photoUrl */}
          <p className="field field-icon">
            <label for="fullname">
              <span>
                <i className="fa fa-image"></i>
              </span>
            </label>
            <input
              formControlName="photo"
              type="text"
              name="photo"
              placeholder="Add image url"
            />
          </p>

          {/* password */}

          <div formGroupName="passwords">
            <p className="field field-icon">
              <label for="password">
                <span>
                  <i className="fas fa-lock"></i>
                </span>
              </label>
              <input
                formControlName="password"
                type="password"
                name="password"
                id="password"
                placeholder="******"
              />
            </p>

            {/* rePassword */}
            <p className="field field-icon">
              <label for="rePassword">
                <span>
                  <i className="fas fa-lock"></i>
                </span>
              </label>
              <input
                formControlName="rePassword"
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
