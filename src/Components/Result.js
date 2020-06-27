import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

const defaults = {
    icon: 'CLEAR_DAY',
    color: 'goldenrod',
    size: 100,
    animate: true
  };

const Result = ({cityName, temp,climate, icon,color, validCity}) => {
    if(validCity){
    return (
    <div className='center ma'>
        <div className='absolute mt2'>
            { icon === ''?
            <div></div>:
            <div>
            <h1 className='center'>{`Weather in ${cityName}: ${temp}\u00b0C, ${climate}`}</h1>
            <ReactAnimatedWeather
            icon={icon}
            color={color}            
            size={defaults.size}
            animate={defaults.animate}
             />
             </div>
    }
        </div>
    </div>
    );
    }
    else{
        return (
            <div className='center ma'>
                <div className='absolute mt2'>
                    <h1>Enter a valid City Name</h1>
                </div>
            </div>
            );  
    }
}


export default Result;