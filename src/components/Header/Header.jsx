import styles from './Header.module.css'
function Header() {
  return (
    <div className={styles.heading}>
        <h1>Where in the world ?</h1>
        <button className={styles.btnSwitchTheme}>
            dark mode
        </button>
    </div>
  )
}

export default Header