import './Header.css';

export const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-dark bg-primary navbar-expand-md navbar-dark">
                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between" >
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item" href="/">
                            <a><i className="fa fa-fw fa-home"></i><span>Home</span></a>
                        </li>
                        <li className="nav-item" href="#">
                            <a><i className="fa fa-sign-in-alt"></i><span>Login</span></a>
                        </li>
                        <li className="nav-item" href="#">
                            <a><i className="fas fa-user-plus"></i><span>Register</span></a>
                        </li>
                        <li className="nav-item" href="#">
                            <a><i className="fa fa-plus"></i><span>Create
                                article</span></a>
                        </li>
                        <li className="nav-item" href="#">
                            <a><i className="fas fa-newspaper"></i><span>My articles</span></a>
                        </li>
                        <li className="nav-item" href="#">
                            <a><i className="fas fa-person-booth"></i><span>All articles</span></a>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true"><i
                                className="fas fa-user-shield"></i>Admin</a>
                            <ul className="dropdown-menu">
                                <a className="dropdownItem" href="#">User management</a>
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav mt-2 mt-lg-0">

                        <li className="nav-item" href="#">
                            <a><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className="avatar" alt="Avatar" /></a>
                        </li>
                        <li className="nav-item">
                            <a><i className="fas fa-sign-out-alt"></i><span>Logout</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}