import styles from './NavBar.module.scss'

const NavBar = () => {
    return (
        <div>
            <div className={styles.nav}>
                <div>
                    <span className="fa fa-tasks" />
                </div>
                <div className={styles.navlinks}>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/favorite'>Favorite</a></li>
                        <li><a href='/about'>About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;