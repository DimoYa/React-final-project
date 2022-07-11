import './Landing.css';

export const Landing = () => {
  return (
    <div className="container">
      <div class="m-5">
        <h1 class="text-center ">Welcome to our fishing blog!</h1>
      </div>

      {/* Not Logged in */}

      <div class="mt-5">
        <div class="d-flex justify-content-between">
          <div class="card card border-primary mb-3 container-fluid content-row">
            <div class="card-body container-fluid content-row d-flex flex-column">
              <h4 class="card-title container-fluid">New member?</h4>
              <p class="card-text align-self-md-center">
                Get registration and start reading and posting
              </p>
            </div>
            <div class="card-buttons align-self-md-center mb-3">
              <button class="btn btn-secondary">
                <i class="fas fa-user-plus p-1"></i>Register
              </button>
            </div>
          </div>
          <div class="col py-3 px-md-5 bordered col-example"></div>
          <div class="card card border-primary mb-3 container-fluid content-row">
            <div class="card-body container-fluid content-row d-flex flex-column">
              <h4 class="card-title container-fluid ">Already registered?</h4>
              <p class="card-text align-self-md-center">
                Login and manage your articles
              </p>
            </div>
            <div class="card-buttons align-self-md-center mb-3">
              <button class="btn btn-secondary">
                <i class="fas fa-sign-in-alt p-1"></i>Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Admin */}

      <div>
        <div class="card text-white bg-info mb-3">
          <div class="card-body">
            <h4 class="card-title container-fluid">Admin management</h4>
            <p class="card-text align-self-md-center">
              Manage users and articles
            </p>
            <div id="buttons">
              <a class="btn btn-secondary" href='["/admin/users"]'>
                <i class="fas fa-user-shield p-1"></i>View and manage users
              </a>
              <a class="btn btn-secondary" href='["/article/list"]'>
                <i class="fas fa-user-shield p-1"></i>View and manage articles
              </a>
            </div>
          </div>
        </div>
        <div class="card text-white bg-info mb-3">
          <div class="card-body">
            <h4 class="card-title container-fluid">Profile</h4>
            <p class="card-text align-self-md-center">
              View and manage your profile
            </p>
            <div id="buttons">
              <a class="btn btn-secondary" href='["/user/profile", userId]'>
                <i class="fas fa-users-cog p-1"></i>My profile
              </a>
            </div>
          </div>
        </div>
        <div class="card text-white bg-info mb-3">
          <div class="card-body">
            <h4 class="card-title container-fluid">Articles</h4>
            <p class="card-text align-self-md-center">
              Create, view and manage articles
            </p>
            <div id="buttons">
              <a class="btn btn-secondary" href='["/article/create"]'>
                <i class="fas fa-plus p-1"></i>Create new article
              </a>
              <a class="btn btn-secondary" href='["/article/myArticles"]'>
                <i class="fas fa-newspaper p-1"></i>My articles
              </a>
              <a class="btn btn-secondary" href='["/article/list"]'>
                <i class="fas fa-person-booth p-1"></i>All articles
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
