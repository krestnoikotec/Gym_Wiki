import styles from './header.module.css';
import dark_logo from '../../assets/dark_logo.png';

const Header = () => {
    return (
        <header>
            <div className={styles.header__container}>
                <img src={dark_logo} alt="Gym Wiki dark logo" className={styles.header__logo}/>
            </div>
        </header>
    );
};

export default Header;
