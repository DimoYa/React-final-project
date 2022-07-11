export const Login = () => {
  return (
    <form className="login">
      <div className="container">
        <fieldset>
          <h2>Login Form</h2>

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

          {/* password */}
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

          <button className="btn btn-primary btn-block">Login</button>

          <p className="text-center">
            Don't have an account?
            <a href="/user/register">Register</a>
          </p>
        </fieldset>
      </div>
    </form>
  );
};
