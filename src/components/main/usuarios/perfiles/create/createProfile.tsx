import styles from './createProfile.module.css';
import saveIcon from '../../../../../assets/public/disquetIcon.svg';
import { useEffect, useState } from 'react';
import arrow from '../../../../../assets/public/arrow.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartamentsAction } from '../../../../../redux/actions/usuarios/departamentsActions/getDepartaments';
import { createProfileAction } from '../../../../../redux/actions/usuarios/profilesActions/createProfile';

interface Props {
  isOpen: any;
  onClose: any;
  children: any;
  openModal: () => void;
}
export default function CreateProfile({
  isOpen,
  onClose,
  children,
  openModal,
}: Props) {
  const dispatch = useDispatch();
  const { allDepartaments } = useSelector((state) => state.departaments);
  const [departament, setDepartament] = useState('');
  const [profile, setProfile] = useState('');
  const [toggleDepartament, setToggleDepartament] = useState(false);

  const handleChange = (arg: any) => {
    setProfile(arg);
  };

  useEffect(() => {
    dispatch(getDepartamentsAction());
  }, []);
  return (
    <main className={styles.screen}>
      <section className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div className={styles.header}>
          <h2>{children}</h2>
        </div>
        <div className={styles.form}>
          <input
            type="text"
            onChange={(e) => {
              handleChange(e.target.value);
            }}
            placeholder="Encargado de recepcion, Almacenista..."
          />
          <div className={styles.containerInput}>
            <div className={styles.categoriesSelect}>
              <div
                className={styles.customSelect}
                onClick={() => {
                  setToggleDepartament(!toggleDepartament);
                }}
              >
                <div className={styles.selectTrigger}>
                  <span>
                    {departament.length > 1 ? departament : 'Departamento'}
                  </span>
                  <img
                    src={arrow}
                    alt="arrow-icon"
                    className={styles.arrowSelect}
                  />
                </div>
                <div
                  className={toggleDepartament ? styles.options : styles.hidden}
                >
                  {allDepartaments?.map((element, index) => (
                    <div
                      key={index}
                      className={styles.option}
                      onClick={() => {
                        setDepartament(element.departamentName);
                      }}
                    >
                      <span>{element.departamentName}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <button
            disabled={departament.length < 1}
            onClick={() => {
              const newProfile = {
                departament: departament,
                profileName: profile,
              };
              dispatch(createProfileAction(newProfile));
              onClose();
              openModal();
            }}
          >
            <img src={saveIcon} alt="save-icon" />
            Guardar
          </button>
        </div>
      </section>
    </main>
  );
}
