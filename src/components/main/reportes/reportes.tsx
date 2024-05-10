import styles from './reportes.module.css';
import { INITIAL_STATE, SET_ADMINISTRATION, SET_TILL, reports } from './libs';
import { useState } from 'react';
import AdminReports from './reportLayout/reports.admin';
import arrowBack from '../../../assets/reportsMenu/arrowBack.svg';

export default function Reportes() {
  const [process, setProcess] = useState(INITIAL_STATE);
  return (
    <section className={styles.container}>
      {process === INITIAL_STATE ? (
        <>
          <h2>Reportes</h2>
          <div>
            {reports.map((element, index) => (
              <div
                className={styles.reportItem}
                onClick={() => {
                  setProcess(element.value);
                }}
              >
                <div>
                  <img src={element.icon} alt="icon-element" />
                </div>
                <h3>{element.tittle}</h3>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className={styles.reportsContainer}>
          <div>
            <button
              onClick={() => {
                setProcess(INITIAL_STATE);
              }}
            >
              <img src={arrowBack} alt="arrow-back" />
            </button>
            <h3>
              {process === SET_ADMINISTRATION
                ? 'Administracion'
                : process === SET_TILL
                ? 'Caja'
                : null}
            </h3>
          </div>
          <AdminReports back={setProcess}></AdminReports>
        </div>
      )}
    </section>
  );
}
