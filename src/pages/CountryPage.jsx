import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



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
          return nativeNameValues.map(nativeName => nativeName.official).join(',')};
      const getCapitals = capitals => capitals.map(capital => capital)?.join(','); 

      const countryDetail = countryInfo.map((country, key) => 
          <div key={key}>
            <p>{country.name.common}</p>
            <p>{getNativeName(country.name.nativeName)}</p>
            <p>{getCapitals(country.capital)}</p>
          </div>
        )

  return (
    <>
    {countryDetail}
    </>
  )
}

export default CountryPage