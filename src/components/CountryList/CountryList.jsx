/* eslint-disable react/prop-types */

function CountryList({countries}) {

  const countriesCard = countries.map((country)=> <div key={country.name.common}>{country.name.common}</div>)
  return (
    <>
      {countriesCard}
    </>
  );

}

export default CountryList