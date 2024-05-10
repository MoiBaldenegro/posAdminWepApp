import styles from './autorizaciones.module.css';
//  Icons
import disquetIcon from '../../../../assets/public/disquetIcon.svg';
// Hooks
import { useSelector } from 'react-redux';
// Vars
import { apps, modules, posActions } from './admin/admin.modules';
import { useState } from 'react';

export default function Autorizaciones() {
  const { allEmployees } = useSelector((state) => state.employees);
  const [select, setSelect] = useState(false);
  const { allProfiles } = useSelector((state) => state.profiles);
  const toggleSelect = () => {
    setSelect(!select);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.tittle}>
        Autorizaciones
        <button className={styles.saveButton}>
          <img src={disquetIcon} alt="save-icon" />
          Guardar
        </button>
      </h1>
      <section className={styles.section}>
        {select ? (
          <div className={styles.containerOne}>
            <div className={styles.tittles}>
              <h3 className={styles.profiles} onClick={toggleSelect}>
                Perfiles
              </h3>
              <h3 className={styles.employees} onClick={toggleSelect}>
                Empleados
              </h3>
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.list}>
                {allProfiles?.map((element) => (
                  <h4 className={styles.item}>{element.profileName}</h4>
                ))}
                {allProfiles?.map((element) => (
                  <h4 className={styles.item}>{element.profileName}</h4>
                ))}
                {allProfiles?.map((element) => (
                  <h4 className={styles.item}>{element.profileName}</h4>
                ))}
                {allProfiles?.map((element) => (
                  <h4 className={styles.item}>{element.profileName}</h4>
                ))}
                {allProfiles?.map((element) => (
                  <h4 className={styles.item}>{element.profileName}</h4>
                ))}
                {allProfiles?.map((element) => (
                  <h4 className={styles.item}>{element.profileName}</h4>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.containerOne}>
            <div className={styles.tittles}>
              <h3 className={styles.profilesTwo} onClick={toggleSelect}>
                Perfiles
              </h3>
              <h3 className={styles.employeesTwo} onClick={toggleSelect}>
                Empleados
              </h3>
            </div>
            <div className={styles.contentContainerTwo}>
              <div className={styles.list}>
                {allEmployees?.map((element) => (
                  <div className={styles.itemCode}>
                    <h4 className={styles.item}>{element.code}</h4>
                    <h4 className={styles.item}>{element.employeeName}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <section className={styles.sectionTwo}>
          <div className={styles.inContainerOne}>
            <h2 className={styles.tittleOne}>Autorización por módulos</h2>
            <div className={styles.inListOne}>
              {apps?.map((element) => (
                <div className={styles.inputOne}>
                  <label className={styles.label}>
                    <input type="checkbox" className={styles.check} />
                    {element}
                  </label>
                </div>
              ))}
            </div>
            <div className={styles.inListTwo}>
              {modules?.map((element) => (
                <div className={styles.inputOne}>
                  <label className={styles.label}>
                    <input type="checkbox" className={styles.check} />
                    {element}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.inContainerTwo}>
            <div className={styles.head}>
              <h2 className={styles.tittleTwo}>Autorización por acciones</h2>
              <button className={styles.allButton}>Seleccionar todo</button>
            </div>
            <div className={styles.inListThree}>
              {posActions?.map((element) => (
                <div className={styles.inputTwo}>
                  <label className={styles.labelTwo}>
                    <input type="checkbox" className={styles.check} />
                    {element}
                  </label>
                </div>
              ))}
              {posActions?.map((element) => (
                <div className={styles.inputTwo}>
                  <label className={styles.labelTwo}>
                    <input type="checkbox" className={styles.check} />
                    {element}
                  </label>
                </div>
              ))}
              {posActions?.map((element) => (
                <div className={styles.inputTwo}>
                  <label className={styles.labelTwo}>
                    <input type="checkbox" className={styles.check} />
                    {element}
                  </label>
                </div>
              ))}
              {posActions?.map((element) => (
                <div className={styles.inputTwo}>
                  <label className={styles.labelTwo}>
                    <input type="checkbox" className={styles.check} />
                    {element}
                  </label>
                </div>
              ))}
              {posActions?.map((element) => (
                <div className={styles.inputTwo}>
                  <label className={styles.labelTwo}>
                    <input type="checkbox" className={styles.check} />
                    {element}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
