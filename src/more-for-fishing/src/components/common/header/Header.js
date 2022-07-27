import { Link, useNavigate } from 'react-router-dom';
import defaultAvatarPath from '../../../assets/default-avatar-profile.png';

import './Header.css';

import * as authenticationService from '../../../services/authenticationService';
import { toast } from 'react-toastify';

export const Header = () => {
  const navigate = useNavigate();

  const isLogged = authenticationService.isLoggedIn();
  const isAdmin = authenticationService.isAdmin();
  const userId = authenticationService.returnId();
  const avatar = authenticationService.returnUserPhoto();

  const logoutHandler = () => {
    authenticationService
      .logout()
      .then(() => {
        toast.success('Successfully logout!');
        navigate('/user/login');
      })
      .catch((err) => {
        toast.err(err);
      });
  };

  return (
    <header>
      <nav className="navbar navbar-dark bg-primary navbar-expand-md navbar-dark">
        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item" href="/">
              <Link to="/">
                <i className="fa fa-fw fa-home"></i>
                <span>Home</span>
              </Link>
            </li>
            {!isLogged && (
              <>
                <li className="nav-item">
                  <Link to="/user/login">
                    <i className="fa fa-sign-in-alt"></i>
                    <span>Login</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/user/register">
                    <i className="fas fa-user-plus"></i>
                    <span>Register</span>
                  </Link>
                </li>
              </>
            )}
            {isLogged && (
              <>
                <li className="nav-item">
                  <Link to="/article/create">
                    <i className="fa fa-plus"></i>
                    <span>Create article</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#">
                    <i className="fas fa-newspaper"></i>
                    <span>My articles</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#">
                    <i className="fas fa-person-booth"></i>
                    <span>All articles</span>
                  </Link>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                <li className="dropdown">
                  <p
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <i className="fas fa-user-shield"></i>Admin
                  </p>
                  <ul className="dropdown-menu">
                    <Link to="/admin/user-management" className="dropdownItem">
                      User management
                    </Link>
                  </ul>
                </li>
              </>
            )}
          </ul>
          {isLogged && (
            <>
              <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item">
                  <Link to={`user/profile/${userId}`}>
                    <img
                      src={
                        avatar === 'null' || avatar === ''
                          ? defaultAvatarPath
                          : avatar
                      }
                      className="avatar"
                      alt="Avatar"
                    />
                  </Link>
                </li>
                <li className="nav-item">
                  <p onClick={logoutHandler}>
                    <i className="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                  </p>
                </li>
              </ul>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
