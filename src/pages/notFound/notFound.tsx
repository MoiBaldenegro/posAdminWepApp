import styles from './notFound.module.css';

import { NavLink } from 'react-router-dom';

import tomateLogo from '../../assets/loginPage/tomateLogo.svg';

export default function NotFound() {
  return (
    <div className={styles.loginPage}>
      <main className={styles.centerContainer}>
        <img src={tomateLogo} alt="" />
        <h1 className={styles.text}>
          Este modulo se encuentra actualmente en construccion...
        </h1>
        <button className={styles.btnBack}>
          <NavLink to="/login" className={styles.btnBackLink}>
            RETURN
          </NavLink>
        </button>
      </main>
    </div>
  );
}
