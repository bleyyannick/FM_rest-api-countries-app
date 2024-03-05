import { useContext, useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
import './CountryPage.css'
import Header from "../components/Header/Header";
import { ThemeContext } from "../store/ThemeContextProvider";
import clsx from "clsx";

function CountryPage() {
    const [countryInfo, setCountryInfo] = useState([])
    const {theme} = useContext(ThemeContext)
    const { name } = useParams()
    useEffect(() => {
        const fetchCountry = async () => {
            try {
               const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
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
   <section className={clsx(`backHome ${theme}`)}>
      <Link to={`/`}>
        Back
      </Link>
   </section>
   <section className={clsx(`countryDetails ${theme}`)}>
    {countryInfo.map((country, key) =>
      <article className={`countryContainer`} key={key}>
          <div className={`countryFlag`}>
              <img src={country.flags.png}  alt={country.flags.alt}  />
          </div>
          <div className={`countryDescription`}>
              <div>
                <h2>{country.name.common}</h2>
              </div>
              <div className={`countryTextDetails`}>
                <ul className={`countryFirstList`}>
                  <li>Native Name: {getNativeName(country.name.nativeName)} </li>
                  <li>Population:{country.population} </li>
                  <li>Region: {country.region} </li>
                  <li>Sub Region: {country.subregion}</li>
                  <li>Capital: {getCapitals(country.capital)}</li>
                </ul>
                <ul className={`countrySecondList`}> 
                  <li>Top Level Domain: {country.tld[0]} </li>
                  <li>Currencies:{(Object.values(country.currencies)[0].name)} </li>
                  <li>Languages: {(Object.values(country.languages).map(languages => languages).join(','))} </li>
                </ul>
              </div>
              <div className={`countryBorders`}>
                <p>Border Countries: {country.borders?.map(border => border.toLowerCase()).join(',')}</p>
              </div>
          </div>
      </article>)}
    </section>
  </>
  )
}

export default CountryPage