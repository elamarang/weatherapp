import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import weather from './Logo.jpeg';

const Logo = () => {
    return (
    <div className='ma3 mt0'>
        <Tilt className="Tilt br1 shadow-2" options={{ max : 55 }} style={{ height: 120, width: 120 }} >
        <div className="Tilt-inner pa3">
            <img style={{paddingTop:'3px'}} alt='logo' src={weather}/>
        </div>
        </Tilt>
    </div>);
}

export default Logo;