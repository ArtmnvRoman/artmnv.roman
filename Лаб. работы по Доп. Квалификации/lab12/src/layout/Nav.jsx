import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import logo from '../images/logo.svg';
import calculation from '../images/calculation.svg';
import measuring from '../images/measuring.svg';


function Nav () {
  return (
    <div>
      <nav className={styles.main_menu}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <ul className={styles.components}>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/about_us">About us</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
        <div className={styles.button}>
          <button className={styles.make_request}><img src={measuring} alt="Make request" /> Make request</button>
          <button className={styles.calculation}><img src={calculation} alt="Calculation" /> Calculation</button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
