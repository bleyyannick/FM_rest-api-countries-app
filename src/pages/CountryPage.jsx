import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './CountryPage.css'
import Header from "../components/Header/Header";
import { ThemeContext } from "../store/ThemeContextProvider";
import fetchCountry from "../utilities/api";
import { useQuery } from '@tanstack/react-query'
import clsx from "clsx";

function CountryPage() {
    const {theme} = useContext(ThemeContext)
    const { name } = useParams()
    const navigate = useNavigate()

    const { data, isLoading, error }= useQuery({
      queryKey: ['singleCountry', name], 
      queryFn: () => fetchCountry(name), 
      keepPreviousData: false
    })
    if (error) return 'An error has occurred: ' + error.message
       const getNativeName = nativeNameObject => {
          const nativeNameValues = Object.values(nativeNameObject); 
          return nativeNameValues.map(nativeName => nativeName.official).join(',')
        };
      const getCapitals = capitals => capitals.map(capital => capital)?.join(', ') || 'No Capital'; 
  return (
   <>
   <Header />
   <section className={clsx(`backHome ${theme}`)}>
      <button onClick={() => navigate(-1)}>
        Back
      </button>
   </section>
   <section className={clsx(`countryDetails ${theme}`)}>
    {isLoading ? <div>Loading....</div> : 
        data.map((country, key) =>
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