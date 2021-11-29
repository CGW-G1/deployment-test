import React, { useState, useEffect }  from 'react';
import API from '../API';

function OutputStats(props) {

    let cases = '';
    let date = '';

    const [countryInfo, setCountryInfo]= useState([]);

    console.log('Received from parent: ', props.sendOutput);    

    async function getCountryStat() {

        const response = await API.get(`/statistics?country=${props.sendOutput}`);
            if (response.status === 200) {
                console.log('200 ok');
                let extractStat = response.data.response[0];
                cases = extractStat.cases;
                console.log('Extracted Stat: ', extractStat);
                console.log('Extracted Cases: ', cases);
                setCountryInfo(extractStat);
            }
    }

    useEffect(
        () => {
            if (props.sendOutput === "") {                                
                return;
            }
            getCountryStat();            
    },[props.sendOutput])

    function Test () {
        if (props.sendOutput === "") {  
            console.log('Blanks data');            
            return (
                <></>
            );
        }

        let x = 'ss';

        const cnt = countryInfo.country;
        // const cases = countryInfo.cases;
        console.log('Country obj:', countryInfo);
        console.log('COUNRTY:', cnt);
        console.log('CASES:', cases);

        return (
        <div className='displayCell'>
            {`Country: ${cnt}`}
            <br/>
            Cases
            <ul>
                <li>New: {x}</li>
                {/* <li></li>
                <li></li>
                <li></li> */}

            </ul>           
        </div>
        )
    }

    return (
        <>
            <Test />
        </>
    )
}

export default OutputStats;
