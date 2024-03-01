import { useContext, useEffect, useState } from "react";
import CountryList from "../components/CountryList/CountryList";
import FilterCountry from "../components/FilterCountry/FilterCountry";
import Header from "../components/Header/Header";
import SearchCountry from "../components/SearchCountry/SearchCountry";
import clsx from "clsx";
import  './Home.css'; 
import { ThemeContext } from "../store/ThemeContextProvider";

function Home() {
  const [countries, setCountries] = useState([]);
  const [searchCountries, setSearchCountries] = useState('');
  const [region, setRegion] = useState('All');
  const { theme } = useContext(ThemeContext);

    useEffect(() => {
     const fetchAllCountries = async () => {
         try {
            const response = await fetch('https://restcountries.com/v3.1/all')
            if(!response.ok) throw new Error('Something went wrong with the request')
            const data = await response.json(); 
            setCountries(data); 
            } catch(err) {
                console.log(err)
            }
         };
          fetchAllCountries(); 
    }, []); 
    
  const handleSearchCountries = userInputValue => setSearchCountries(userInputValue); 
  const handleFilterByRegion = value => setRegion(value); 
  return (
    <>
      <Header />
        <main>
          <section className={clsx('search',theme)}>
            <SearchCountry onSearch={handleSearchCountries} />
            <FilterCountry onFilterByRegion={handleFilterByRegion} />
          </section>
          <section className={clsx('countriesContainer', theme)}>
            <CountryList 
            countries={countries} 
            region={region}
            userInput={searchCountries}/>
          </section>
        </main>
    </>
  )
}

export default Home; 