import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';
import { useStateValue } from '../../StateProvider/StateProvider';

const Navigation = () => {
    const [{ showNavbar}, dispatch ] = useStateValue();

    const hideNavbar = () => {
        dispatch({
            type: 'HIDE_NAVBAR',
            action: false
        })
    }
    
    console.log(showNavbar)

    return (
        <div className="navigation">
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Works
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Contact
                    </Link>
                </li>
            </ul>
            <div onClick={hideNavbar} className="navigation__hideIcon">
                <div/>
            </div>
        </div>
    )
}

export default Navigation
