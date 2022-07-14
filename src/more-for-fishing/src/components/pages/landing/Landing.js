import './Landing.css';

export const Landing = () => {

  return (
    <div className="landing-container">
      <div className="m-5">
        <h1 className="text-center ">Welcome to our fishing blog!</h1>
      </div>

      {/* Not Logged in */}

      <div className="mt-5">
        <div className="d-flex justify-content-between">
          <div className="card text-white card border-primary mb-3 container-fluid content-row">
            <div className="card-body container-fluid content-row d-flex flex-column">
              <h4 className="card-title container-fluid">New member?</h4>
              <p className="card-text align-self-md-center">
                Get registration and start reading and posting
              </p>
            </div>
            <div className="card-buttons align-self-md-center mb-3">
              <button className="btn btn-secondary">
                <i className="fas fa-user-plus p-1"></i>Register
              </button>
            </div>
          </div>
          <div className="col py-3 px-md-5 bordered col-example"></div>
          <div className="card text-white card border-primary mb-3 container-fluid content-row">
            <div className="card-body container-fluid content-row d-flex flex-column">
              <h4 className="card-title container-fluid ">Already registered?</h4>
              <p className="card-text align-self-md-center">
                Login and manage your articles
              </p>
            </div>
            <div className="card-buttons align-self-md-center mb-3">
              <button className="btn btn-secondary">
                <i className="fas fa-sign-in-alt p-1"></i>Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Admin */}

      <div>
        <div className="card text-white bg-info mb-3">
          <div className="card-body">
            <h4 className="card-title container-fluid">Admin management</h4>
            <p className="card-text align-self-md-center">
              Manage users and articles
            </p>
            <div id="buttons">
              <a className="btn btn-secondary" href='["/admin/users"]'>
                <i className="fas fa-user-shield p-1"></i>View and manage users
              </a>
              <a className="btn btn-secondary" href='["/article/list"]'>
                <i className="fas fa-user-shield p-1"></i>View and manage articles
              </a>
            </div>
          </div>
        </div>
        <div className="card text-white bg-info mb-3">
          <div className="card-body">
            <h4 className="card-title container-fluid">Profile</h4>
            <p className="card-text align-self-md-center">
              View and manage your profile
            </p>
            <div id="buttons">
              <a className="btn btn-secondary" href='["/user/profile", userId]'>
                <i className="fas fa-users-cog p-1"></i>My profile
              </a>
            </div>
          </div>
        </div>
        <div className="card text-white bg-info mb-3">
          <div className="card-body">
            <h4 className="card-title container-fluid">Articles</h4>
            <p className="card-text align-self-md-center">
              Create, view and manage articles
            </p>
            <div id="buttons">
              <a className="btn btn-secondary" href='["/article/create"]'>
                <i className="fas fa-plus p-1"></i>Create new article
              </a>
              <a className="btn btn-secondary" href='["/article/myArticles"]'>
                <i className="fas fa-newspaper p-1"></i>My articles
              </a>
              <a className="btn btn-secondary" href='["/article/list"]'>
                <i className="fas fa-person-booth p-1"></i>All articles
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
