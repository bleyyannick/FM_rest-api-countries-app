/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { ThemeContext } from '../../store/ThemeContextProvider';

function SearchCountry({ onSearch }) {
  const [inputSearch, setInputSearch] = useState('');
  const { theme } = useContext(ThemeContext)
  const handleInputSearch = e => {
     setInputSearch(e.target.value);
     onSearch(e.target.value);
   }; 

  return (
     <form>
         <input 
          className={theme}
          type='text'
          placeholder="Search for a country..."
          value={inputSearch}
          onChange={e => handleInputSearch(e)} />
     </form>

  )
}

export default SearchCountry