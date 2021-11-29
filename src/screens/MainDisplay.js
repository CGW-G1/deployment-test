import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import OutputStats from '../components/OutputStats';
// import API from '../API';

function MainDisplay() {

    const [outputCountry, setOutputCountry] = useState('');

    function submitCountry(data) {
        console.log('submitCountry data:', data.country);
        setOutputCountry(data.country);
    }

    return (
        <div className='canvass'>
            <div className='displayWindow'>
                <InputForm passCountrySelect={submitCountry} />
            </div>
            <div className='displayWindow2'>
                <OutputStats sendOutput={outputCountry} />
            </div>
        </div>
    )    
}

export default MainDisplay;