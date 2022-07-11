import './Header.css';

export const Header = () => {
    return (
        <header>
            <nav class="navbar navbar-dark bg-primary navbar-expand-md navbar-dark">
                <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between" >
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item" href="/">
                            <a><i class="fa fa-fw fa-home"></i><span>Home</span></a>
                        </li>
                        <li class="nav-item" href="#">
                            <a><i class="fas fa-sign-in-alt"></i><span>Login</span></a>
                        </li>
                        <li class="nav-item" href="#">
                            <a><i class="fas fa-user-plus"></i><span>Register</span></a>
                        </li>
                        <li class="nav-item" href="#">
                            <a><i class="fa fa-plus"></i><span>Create
                                article</span></a>
                        </li>
                        <li class="nav-item" href="#">
                            <a><i class="fas fa-newspaper"></i><span>My articles</span></a>
                        </li>
                        <li class="nav-item" href="#">
                            <a><i class="fas fa-person-booth"></i><span>All articles</span></a>
                        </li>
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true"><i
                                class="fas fa-user-shield"></i>Admin</a>
                            <ul class="dropdown-menu">
                                <a class="dropdownItem" href="#">User management</a>
                            </ul>
                        </li>
                    </ul>
                    <ul class="navbar-nav mt-2 mt-lg-0">

                        <li class="nav-item" href="#">
                            <a><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" class="avatar" alt="Avatar" /></a>
                        </li>
                        <li class="nav-item">
                            <a><i class="fas fa-sign-out-alt"></i><span>Logout</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}