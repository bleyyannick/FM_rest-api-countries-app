import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './CountryPage.module.css'
import Header from "../components/Header/Header";



function CountryPage() {
    const [countryInfo, setCountryInfo] = useState([])
    const { name } = useParams()
    useEffect(() => {
        const fetchCountry = async () => {
            try {
               const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fulltext=true`)
               if(!response.ok) throw new Error('Something went wrong with the request')
               const data = await response.json();
                 setCountryInfo(data);
               } catch(err) {
                   console.log(err)
               }
            };
             fetchCountry(); 
       }, [name]); 

       const getNativeName = nativeNameObject => {
          const nativeNameValues = Object.values(nativeNameObject); 
          return nativeNameValues.map(nativeName => nativeName.official).join(',')
        };
      const getCapitals = capitals => capitals.map(capital => capital)?.join(','); 
  return (
   <>
   <Header />
    <section className={styles.countryDetails}>
      <div className={styles.countryFlag}>
      {countryInfo.map((country, key) => 
        <img key={key} src={country.flags.png}  alt={country.flags.alt}  />
      )}
      </div>
      {countryInfo.map((country, key) => 
       <div key={key}>
          <div>
            <h2>{country.name.common}</h2>
          </div>
          <div>
            <ul>
              <li>Native Name: {getNativeName(country.name.nativeName)} </li>
              <li>Population:{country.population} </li>
              <li>Region: {country.region} </li>
              <li>Sub Region: {country.subregion}</li>
              <li>Capital: {getCapitals(country.capital)}</li>
            </ul>
            <ul>
              <li>Top Level Domain: {country.tld[0]} </li>
              <li>Currencies:{(Object.values(country.currencies)[0].name)} </li>
              <li>Languages: {(Object.values(country.languages).map(languages => languages).join(','))} </li>
            </ul>
          </div>
          <div>
            <p>Border Countries: {country.borders?.map(border => border.toLowerCase()).join(',')}</p>
          </div>
       </div>
       )
      }
    </section>
  </>
  )
}

export default CountryPage