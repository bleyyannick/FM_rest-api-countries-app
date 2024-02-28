/* eslint-disable react/prop-types */
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import styles from './SearchCountry.module.css'; 

function SearchCountry({ onSearch }) {
  const [inputSearch, setInputSearch] = useState('');
  const handleInputSearch = e => {
     setInputSearch(e.target.value);
     onSearch(e.target.value);
   }; 

  return (
     <form>
         <input 
          type='text'
          placeholder="Search for a country..."
          value={inputSearch}
          onChange={e => handleInputSearch(e)} />
     </form>

  )
}

export default SearchCountry