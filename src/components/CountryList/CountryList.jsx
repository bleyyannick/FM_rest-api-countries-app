/* eslint-disable react/prop-types */

import Country from '../Country/Country';
import styles from './CountryList.module.css';
import { Link } from 'react-router-dom';

function CountryList({countries, region , userInput}) {
  
  const filteredCountries =  countries.filter(country => 
       country.name.common.toLowerCase().includes(userInput.toLowerCase()));

  const countriesCard = filteredCountries.map((country)=> {
    if (country.region === region || region === "All") {
      return (
        <Link to={`/name/${country.name.common.toLowerCase()}`} 
             key={country.name.common} 
             className={styles.cardFlagLink}>
            <Country country={country} /> 
        </Link>
      )
    } 
  })
  return (
    <>
      {countriesCard}
    </>
  );

}

export default CountryList