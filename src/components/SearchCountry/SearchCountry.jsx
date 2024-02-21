/* eslint-disable react/prop-types */
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import styles from './SearchCountry.module.css'; 

function SearchCountry({ onFilter}) {
  const [searchedCountry, setSearchedCountry] = useState('');
  const handleSearchCountry = e => {
     setSearchedCountry(e.target.value);
     onFilter(e.target.value);
   }; 

  return (
     <form>
         <input 
          type='text'
          placeholder="search for a country"
          value={searchedCountry}
          onChange={event => handleSearchCountry(event)} />
     </form>

  )
}

export default SearchCountry