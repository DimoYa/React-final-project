import { Link } from 'react-router-dom';

import './Header.css';

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-primary navbar-expand-md navbar-dark">
        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item" href="/">
            <Link to="/">
              <i className="fa fa-fw fa-home"></i><span>Home</span>
            </Link>
            </li>
            <li className="nav-item" href="#">
              <Link to="/user/login">
                <i className="fa fa-sign-in-alt"></i>
                <span>Login</span>
              </Link>
            </li>
            <li className="nav-item" href="#">
              <Link to="/user/register">
                <i className="fas fa-user-plus"></i>
                <span>Register</span>
              </Link>
            </li>
            <li className="nav-item" href="#">
              <Link to="#">
                <i className="fa fa-plus"></i>
                <span>Create article</span>
              </Link>
            </li>
            <li className="nav-item" href="#">
              <Link to="#">
                <i className="fas fa-newspaper"></i>
                <span>My articles</span>
              </Link>
            </li>
            <li className="nav-item" href="#">
              <Link to="#">
                <i className="fas fa-person-booth"></i>
                <span>All articles</span>
              </Link>
            </li>
            <li className="dropdown">
              <p
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-expanded="true"
              >
                <i className="fas fa-user-shield"></i>Admin
              </p>
              <ul className="dropdown-menu">
                <Link to="#" className="dropdownItem">
                  User management
                </Link>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav mt-2 mt-lg-0">
            <li className="nav-item" >
              <Link to="user/profile">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  className="avatar"
                  alt="Avatar"
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="user/logout">
                <i className="fas fa-sign-out-alt"></i>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
