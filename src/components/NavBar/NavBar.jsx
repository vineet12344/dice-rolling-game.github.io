import styles from './NavBar.module.css'

const NavBar = () =>{



    return(
        <nav className={styles.nav_container}>
            <div className={styles.nav_logo}>
                <img src="" alt="logo" />
            </div>
            <div className="nav_options">
                <ul>
                    <li>Home</li>
                    <li>Roll!</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar

