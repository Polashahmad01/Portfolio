import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Link className="header__logo" to="/">
                Polash Ahmad
            </Link>
            <div className="header__menu">
                <div className="header__socialIcons">
                    <i className="fab fa-twitter header__socialIcon"></i>
                    <i className="fab fa-facebook header__socialIcon"></i>
                </div>
                <Link className="header__menuResume" to="/">Resume</Link>
                <div className="header__menuIcon">
                </div>
            </div>
        </div>
    )
}

export default Header
