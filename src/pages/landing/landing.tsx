import styles from './landing.module.css';

import { NavLink } from 'react-router-dom';

import tomateLogo from '../../assets/loginPage/tomateLogo.svg';
import whatsApp from '../../assets/public/whatsApp.svg';

// Utils
import { realizarLlamadaWhatsApp } from './utils/call';

export default function Landing() {
  return (
    <div className={styles.loginPage}>
      <main className={styles.centerContainer}>
        <img src={tomateLogo} alt="" />
        <div className={styles.buttonsContainer}>
          <NavLink to="/get-started" className={styles.btnBackLink}>
            Get started
          </NavLink>
          <NavLink to="/login" className={styles.btnBackLink}>
            Login
          </NavLink>
        </div>
      </main>
      <img
        className={styles.ws}
        src={whatsApp}
        alt="whatsapp-icon"
        onClick={realizarLlamadaWhatsApp}
      />
    </div>
  );
}
