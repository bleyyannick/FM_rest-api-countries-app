import { useEffect, useState } from "react";
import CountryList from "../components/CountryList/CountryList";
import FilterCountry from "../components/FilterCountry/FilterCountry";
import Header from "../components/Header/Header";
import SearchCountry from "../components/SearchCountry/SearchCountry";
import styles from './Home.module.css'; 

function Home() {
    useEffect(() => {
     const fetchAllCountries = async () => {
         try {
            const response = await fetch('https://restcountries.com/v3.1/all', { method: 'GET'})
            if(!response.ok) throw new Error('Something went wrong with the request')
            const data = await response.json(); 
            setCountries(data); 
            } catch(err) {
                console.log(err)
            }
         };
          fetchAllCountries(); 
    }, [])
    const [countries, setCountries] = useState([]); 

  return (
    <>
      <Header />
      <main>
        <section>
          <SearchCountry />
          <FilterCountry />
        </section>
        <section className={styles.countriesContainer}>
          <CountryList countries={countries} />
        </section>
      </main>
    </>
  )
}

export default Home