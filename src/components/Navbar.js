import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="min-h-screen">
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">

                    {/* LEFT: Logo */}
                    <Link className="navbar-brand" to="/">
                        <img src="/images/logo.png" alt="logo" height="40" />
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        {/* CENTER: Nav Links */}
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                    Product
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/action">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/another">Another Action</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Pricing</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                    Resources
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/action">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/another">Another Action</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                    Company
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/action">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/another">Another Action</Link></li>
                                </ul>
                            </li>
                        </ul>

                        {/* RIGHT: Buttons */}
                        <div className="d-flex gap-2">
                            <button className="btn primary-btn">Get Your Free Account</button>
                            <button className="btn primary-outline-btn">
                                <img src="/images/login-icon.png" alt="login" className="me-2 login-icon" />
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar

