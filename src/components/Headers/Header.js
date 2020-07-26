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
                                    <li><Link to="#"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart</Link></li>
                                    <li className="dropdown-toggle"><Link to="#"><i className="fas fa-user"></i> My Account</Link>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="/Profile"><i className="fas fa-user"></i> My Profile</Link>
                                        <Link className="dropdown-item" to="/Logout"><i className="fa fa-lock" aria-hidden="true"></i> Logout</Link>
                                    </div>
                                    </li>
                                </ul>
                                <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                                    <span className="navbar-toggler-icon"><i className="fa fa-bars" aria-hidden="true"></i></span>
                                    
                                </button>
                                <div className="username">
                                <h5>Welcome <span>{sessionStorage.getItem('userName')}</span></h5>
                                </div>
                                <div className="navbar-collapse collapse" id="collapsingNavbar">
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/Home">Home</Link>
                                        </li>
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/addproduct">Add Product</Link>
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