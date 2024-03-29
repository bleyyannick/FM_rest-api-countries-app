import { useContext } from "react"
import { ThemeContext } from "../../store/ThemeContextProvider"
/* eslint-disable react/prop-types */

function FilterCountry({onFilterByRegion}) {
  const {theme} = useContext(ThemeContext)
  return (
    <select className={theme} onChange={e => onFilterByRegion(e.target.value)}>
        <option value='All' >Filter by region</option>
        <option value='Africa' >Africa</option>
        <option value='Americas' >America</option>
        <option value='Asia' >Asia</option>
        <option value='Europe' >Europe</option>
        <option value='Oceania' >Oceania</option>
    </select>
  )
}

export default FilterCountry