/* eslint-disable react/prop-types */

import styles from './CountryList.module.css';

function CountryList({countries}) {

  const countriesCard = countries.map((country)=> {
    return (
      <div className={styles.card} key={country.name.common}>
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
    )
  })
  return (
    <>
      {countriesCard}
    </>
  );

}

export default CountryList