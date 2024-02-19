/* eslint-disable react/prop-types */

import styles from './CountryList.module.css';

function CountryList({countries}) {

  const countriesCard = countries.map((country)=> {
    return (
    <a key={country.name.common} className={styles.cardFlagLink} href={`/${country.name.common}`}>
      <div className={styles.card} >
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
      </a>

    )
  })
  return (
    <>
      {countriesCard}
    </>
  );

}

export default CountryList