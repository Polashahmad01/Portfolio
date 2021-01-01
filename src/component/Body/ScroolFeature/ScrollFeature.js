import React from 'react';

import './ScrollFeature.css';

const scrollFeature = () => {
    return (
        <div className="scrollFeature">
            <div className="scrollFeature__lines">
                <div className="scrollFeature__lineOne"></div>
                <div className="scrollFeature__lineTwo"></div>
                <div className="scrollFeature__lineThree"></div>
                <div className="scrollFeature__lineFour"></div>
            </div>
            <div className="scroolFeature__scrollDown">
                <p>scrolldown</p>
            </div>
            <div className="scroolFeature__scrollDownLine"></div>
        </div>
    )
}

export default scrollFeature
