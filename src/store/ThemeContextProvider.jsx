/* eslint-disable react/prop-types */
import { createContext, useState, useMemo, useCallback } from "react";

export const ThemeContext = createContext({
    theme: '', 
    toggleTheme: ()=> {},
})

export default function ThemeContextProvider ({children}) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = useCallback(() => setTheme(prev => prev === 'light' ? 'dark' : 'light'), []);
  
  const themeCtxValue = useMemo(() => {
    return { theme, toggleTheme }
  }, [theme, toggleTheme]);
   
   return <ThemeContext.Provider value={themeCtxValue}>
          {children}
        </ThemeContext.Provider>
}