import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className={styles.nav}>
                <div>
                    <span className="fa fa-tasks" />
                </div>
                <div className={styles.navlinks}>
                    <ul>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} 
                            to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                            to="/favorite">Favorite</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                            to="/about">About</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;