/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './SearchCountry.module.css'; 

function SearchCountry({onSearch}) {
  const [searchedCountry, setSearchedCountry] = useState(''); 
  const handleSearchInput = (userInput) => {
     setSearchedCountry(userInput); 
     onSearch(searchedCountry); 
  }

  return (
     <form>
         <input 
         type='text'
          placeholder="search for a country"
          value={searchedCountry}
          onChange={(e) => handleSearchInput(e.target.value)} />
     </form>
  )
}

export default SearchCountry