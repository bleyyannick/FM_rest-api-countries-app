
import { useContext } from 'react';
import  './Header.css'
import { ThemeContext } from '../../store/ThemeContextProvider';
import  clsx  from 'clsx';

function Header() {
  const { theme, toggleTheme} = useContext(ThemeContext)
  
  return (
    <header className={clsx('heading', theme)}>
        <h1>Where in the world?</h1>
        <button onClick={toggleTheme} className={'btnSwitchTheme'}>Dark Mode</button>
    </header>
  )
}

export default Header