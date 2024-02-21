/* eslint-disable react/prop-types */

import styles from './CountryList.module.css';
import { Link } from 'react-router-dom';

function CountryList({countries}) {

  const countriesCard = countries.map((country)=> {
    return (
    <Link to={`/${country.name.common}`} 
         key={country.name.common} 
         className={styles.cardFlagLink}>
      <div className={styles.card}>
        <img src={country.flags.png} alt={country.flags.alt} />
        <div>
          <h3>{country.name.common}</h3>
          <ul>
            <li><b>Population:</b><span>{country.population}</span></li>
            <li><b>Region:</b><span>{country.region}</span></li>
            <li><b>Capital:</b><span>{country.capital}</span></li>
          </ul>
        </div>
       </div> 
      </Link>

    )
  })
  return (
    <>
      {countriesCard}
    </>
  );

}

export default CountryList