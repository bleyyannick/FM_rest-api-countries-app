/* eslint-disable react/prop-types */
import styles from './Country.module.css'; 

function Country({country}) {
  return (
    <div className={styles.card}>
        <img className={styles.cardFlag} src={country.flags.png} alt={country.flags.alt} />
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
}

export default Country