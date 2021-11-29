import React, { useState, useEffect } from 'react';
import API from '../API';

function InputForm(props) {

    const [countries, setCountries]= useState([]);
    const [country, setCountry] = useState('Singapore');

    async function getAllCountries() {

        const response = await API.get('/countries');
        console.log('Response from get - list of countries: ', response)

        let extractCountries = [];

        if (response.status === 200) {
            extractCountries = response.data.response; // zzz.... this array arrangement....
            console.log('Extracted owners', extractCountries);
            setCountries(extractCountries);
        }
    }
    
    useEffect(() => {
        getAllCountries();      
    },[]) // await Stanley help, had assumed needed [countries], but has opposite of intended effect

    const countryList = () => {
        
        console.log('inside render: ', countries);
        if (countries.length === 0) {
            return (
                <p>no countries listed</p>
            )
        }

        const optionCountries = countries.map((x,i) => {
            return (                
                <option key={`${x}-${i}`}>{x}</option>
            )
        })

        return (
            <select id='countries' name='countries' onChange={handleChange} defaultValue='Singapore'>
                {optionCountries}
            </select>
        )
    }

    function handleChange(e) {        
        setCountry(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.passCountrySelect({country});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Choose a country</h3>
                {countryList(countries)}
                <input type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default InputForm;