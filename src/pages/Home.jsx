import { useEffect, useState } from "react";
import CountryList from "../components/CountryList/CountryList";
import FilterCountry from "../components/FilterCountry/FilterCountry";
import Header from "../components/Header/Header";
import SearchCountry from "../components/SearchCountry/SearchCountry";
import styles from './Home.module.css'; 

function Home() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(() => {
     const fetchAllCountries = async () => {
         try {
            const response = await fetch('https://restcountries.com/v3.1/all')
            if(!response.ok) throw new Error('Something went wrong with the request')
            const data = await response.json(); 
            setCountries(data); 
            setFilteredCountries(data)
            } catch(err) {
                console.log(err)
            }
         };
          fetchAllCountries(); 
    }, []); 

   const handleSearchCountry = (inputValue)  => {
      setFilteredCountries(() => [...countries].filter(newCountry => 
          newCountry.name.common.toLowerCase().includes(inputValue.toLowerCase()))); 
   }

  return (
    <>
      <Header />
      <main>
        <section className={styles.search}>
          <SearchCountry onSearch={handleSearchCountry} />
          <FilterCountry />
        </section>
        <section className={styles.countriesContainer}>
          <CountryList countries={filteredCountries} />
        </section>
      </main>
    </>
  )
}

export default Home; 