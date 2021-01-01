import React from 'react';

import './Body.css';
import ScrollFeature from './ScroolFeature/ScrollFeature';
import Home from './Home/Home';

const Body = () => {

    return (
        <div className="body">
            <div className="body__circle">
                <div className="body__circles">
                    <div className="body__circleOne"/>
                    <div className="body__circleTwo"></div>
                    <div className="body__circleThree"></div>
                    <div className="body__circleFour"></div>
                    <div className="body__circleFive"></div>
                    <div className="body__circleSix">
                    </div>
                </div>
            </div>
            <ScrollFeature />
            <Home />
        </div>
    )
}

export default Body
