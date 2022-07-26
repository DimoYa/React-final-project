import { Link } from '@mui/material';
import { unstable_requirePropFactory } from '@mui/utils';
import { useEffect, useState } from 'react';
import * as adminService from '../../services/adminService';

import './Admin.css';

export const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    adminService
      .getAllUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container admin">
      <h3>Admin panel - User management</h3>
      <ul className="list-group">
        {users.map((user) => {
          return (
            <li className="list-group-item" key={user._id}>
              <h5>{user.username}</h5>
              {user._kmd['status'] !== undefined ? (
                <p>
                  {' '}
                  <i className="fas fa-ban" />
                  Disabled
                </p>
              ) : null}
              {user._kmd['roles'] !== undefined &&
              user._kmd['roles'].length !== 0 ? (
                <p>
                  {' '}
                  <i className="fas fa-user-shield" />
                  Admin
                </p>
              ) : null}
              <div id="buttons">
                {user._kmd['status'] === undefined ? (
                  <>
                    <Link to="/" className="btn btn-info">
                      Profile details
                    </Link>
                    &nbsp;
                    <Link
                      to={`/user/profile/edit/${user._id}`}
                      className="btn btn-success"
                    >
                      Update user info
                    </Link>
                    &nbsp;
                    {user._kmd['roles'] === undefined ? (
                      <Link type="button" className="btn btn-danger">
                        Disable user
                      </Link>
                    ) : null}
                    {user._kmd['status'] !== undefined ? (
                      <Link type="button" className="btn btn-success">
                      Enable user
                    </Link>
                    ) : null}
                  </>
                ) : null}
              </div>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
