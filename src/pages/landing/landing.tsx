import styles from './landing.module.css';

import { NavLink } from 'react-router-dom';

import tomateLogo from '../../assets/loginPage/tomateLogo.svg';
import whatsApp from '../../assets/public/whatsApp.svg';

// Utils
import { realizarLlamadaWhatsApp } from './utils/call';
import axios from 'axios';

export default function Landing() {
  return (
    <div className={styles.loginPage}>
      <main className={styles.centerContainer}>
        <img src={tomateLogo} alt="" />
        <div className={styles.buttonsContainer}>
          <button
            onClick={() => {
              const response = axios.post('http://localhost:8000/business');
              console.log(response);
            }}
            className={styles.btnBackLink}
          >
            Get started
          </button>
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
