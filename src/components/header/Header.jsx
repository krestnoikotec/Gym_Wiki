import styles from './header.module.css';
import dark_logo from '../../assets/dark_logo.png';

const Header = () => {
    return (
        <header>
            <div className={styles['header-container']}>
                <img src={dark_logo} alt="Gym Wiki dark logo" className={styles['header-logo']}/>
            </div>
        </header>
    );
};

export default Header;
