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
        <button className={styles.btnBack}>
          <NavLink to="/login" className={styles.btnBackLink}>
            START
          </NavLink>
        </button>
        <img
          className={styles.ws}
          src={whatsApp}
          alt="whatsapp-icon"
          onClick={realizarLlamadaWhatsApp}
        />
      </main>
    </div>
  );
}
