import React from 'react';
import './GetCity.css';
const GetCity = ({onInputChange, onCitySubmit, onCityEnter}) => {
    return (
    <div>
        <p className='f3'>
            {'Enter the City name and get the current weather status. Give it a try!'}
        </p>
        <div className='center'>
            <div className='pa3 br2 shadow-5 form center'>
                <input className='f4 pa3 w-70 center' type ='text' onChange={onInputChange} onKeyPress={onCityEnter}/>
                <button 
                className='w-30 f4 grow link white ph3 pv2 dib bg-light-purple'
                onClick={onCitySubmit}
                >Submit</button>
            </div>
        </div>
    </div>);
}

export default GetCity;