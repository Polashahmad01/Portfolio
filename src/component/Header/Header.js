import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import Navigation from './Navigation/Navigation';
import { useStateValue } from '../StateProvider/StateProvider';

const Header = () => {
    const [ { showNavbar }, dispatch ] = useStateValue();

    const displayNavigation = () => {
        dispatch({
            type: 'SHOW_NAVBAR',
            action: false
        })
    }

    return (
        <div className={showNavbar ? 'header' : ''}>
            {showNavbar ? (
                <>
                    <Link className="header__logo" to="/">
                    Polash Ahmad
                    </Link>
                    <div className="header__menu">
                        <div className="header__socialIcons">
                            <i className="fab fa-twitter header__socialIcon"></i>
                            <i className="fab fa-facebook header__socialIcon"></i>
                        </div>
                        <Link className="header__menuResume" to="/">Resume</Link>
                        <div onClick={displayNavigation}  className="header__menuIcon">
                        </div>
                    </div>
                </>
            ) : (
                <Navigation />
            )}
        </div>
    )
}

export default Header
