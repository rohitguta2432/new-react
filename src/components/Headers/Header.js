import React from 'react';
import {Link} from 'react-router-dom';
import '../Headers/Header.scss'
function Header() {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar fixed-top navbar-dark d-table w-100">
                                <ul className="mainnav">
                                    <li><Link to=""><i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart</Link></li>
                                    <li className="dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><Link to=""><i className="fas fa-user"></i> My Account</Link>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <Link className="dropdown-item" to="#"><i className="fas fa-user"></i> My Profile</Link>
                                        <Link className="dropdown-item" to="#"><i className="fa fa-bell" aria-hidden="true"></i> Notification</Link>
                                        <Link className="dropdown-item" to="#"><i className="fa fa-lock" aria-hidden="true"></i> Logout</Link>
                                    </div>
                                    </li>
                                </ul>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                                    <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i></span>
                                </button>
                                <div className="navbar-collapse collapse" id="collapsingNavbar">
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to="/">Codeply</Link>
                                        </li>
                                        <li className="nav-item">
                                        <Link className="nav-link" to="#myAlert" data-toggle="collapse">Wow</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;