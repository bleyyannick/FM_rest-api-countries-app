import styles from './Header.module.css'
function Header() {
  return (
    <header className={styles.heading}>
        <h1>Where in the world?</h1>
        <button className={styles.btnSwitchTheme}>Dark mode</button>
    </header>
  )
}

export default Header