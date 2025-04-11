/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext = createContext({
    theme: '', 
    toggleTheme: ()=> {},
})

export default function ThemeContextProvider ({children}) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
  
  const themeCtxValue = {
    theme,
    toggleTheme
  }
   
   return <ThemeContext.Provider value={themeCtxValue}>
          {children}
        </ThemeContext.Provider>
}