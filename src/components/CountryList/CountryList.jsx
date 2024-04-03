/* eslint-disable react/prop-types */

import Country from '../Country/Country';
import styles from './CountryList.module.css';
import { Link } from 'react-router-dom';

function CountryList({countries, region , userInput}) {
  const toLowerCountryNames = countryName => countryName.toLowerCase(); 

  const filteredCountries =  countries.filter(country => 
       toLowerCountryNames(country.name.common).includes(toLowerCountryNames(userInput)));

  const countriesCard = filteredCountries.map((country)=> {
    if (country.region === region || region === "All") {
      return (
        <Link to={`/name/${toLowerCountryNames(country.name.common)}`} 
             key={country.name.common} 
             className={styles.cardFlagLink}>
            <Country country={country} /> 
        </Link>
      )
    } 
  })
  return countriesCard; 
}

export default CountryList