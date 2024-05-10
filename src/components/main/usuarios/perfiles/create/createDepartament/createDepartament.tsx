import styles from './createDepartament.module.css';
import saveIcon from '../../../../../../assets/public/disquetIcon.svg';
import createIcon from '../../../../../../assets/public/createIcon.svg';
import deleteIcon from '../../../../../../assets/public/trashIcon.svg';
import pencil from '../../../../../../assets/public/editPencil.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createDepartamentAction } from '../../../../../../redux/actions/usuarios/departamentsActions/createDepartament';
import { createProfileAction } from '../../../../../../redux/actions/usuarios/profilesActions/createProfile';
interface Props {
  isOpen: any;
  onClose: any;
  children: any;
  allDepartaments: any;
  openModal: () => void;
  openModalProfile: () => void;
}
export default function CreateDepartament({
  isOpen,
  onClose,
  children,
  allDepartaments,
  openModal,
  openModalProfile,
}: Props) {
  const [newDepartament, setNewDepartament] = useState(false);
  const [createDepartament, setCreateDepartament] = useState({});
  const [selectedDepartament, setSelectedDepartament] = useState();
  const [newProfile, setNewProfile] = useState('');
  const [newProfilesArray, setNewProfilesArray] = useState([]);

  const newProfileCreate = {
    profileName: newProfile,
    departament: selectedDepartament,
  };

  const dispatch = useDispatch();
  return (
    <main className={styles.screen}>
      <section className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div className={styles.head}>
          <h2>{children}</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.mainSection}>
            <h2>Departamentos</h2>
            <div>
              <div className={styles.departamentsContainer}>
                <div
                  className={
                    newDepartament ? styles.departamentBox : styles.hidden
                  }
                >
                  <input
                    className={styles.newDepartament}
                    type="text"
                    placeholder="Logistica...    Almacen...   Desarrollo..."
                    onChange={(event) => {
                      setCreateDepartament({
                        ...createDepartament,
                        departamentName: event?.target.value,
                      });
                    }}
                  />
                  <button
                    className={styles.backButton}
                    onClick={() => {
                      if (newDepartament) {
                        setNewDepartament(false);
                        return;
                      }
                      return;
                    }}
                  >
                    Deshacer
                  </button>
                </div>
                {allDepartaments?.map((element: any, index: any) => (
                  <div key={index} className={styles.departamentBox}>
                    <input
                      type="radio"
                      name="departament"
                      onClick={() => {
                        console.log(selectedDepartament);
                        setSelectedDepartament(element);
                      }}
                    />
                    <input
                      type="text"
                      readOnly
                      value={element.departamentName}
                    />
                    <button>
                      <img src={pencil} alt="delete-icon" />
                    </button>
                    <button>
                      <img src={deleteIcon} alt="delete-icon" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.footer}>
              <button
                onClick={() => {
                  if (!newDepartament) {
                    setNewDepartament(true);
                    return;
                  }
                  return;
                }}
              >
                <img src={createIcon} alt="create-icon" />
                Crear
              </button>
              <button
                onClick={() => {
                  openModal();
                  dispatch(createDepartamentAction(createDepartament));
                  onClose();
                }}
                disabled={!newDepartament}
              >
                <img src={saveIcon} alt="save-icon" />
                Guardar
              </button>
            </div>
          </div>
          <div className={styles.profilesContainer}>
            <h2>Perfiles</h2>
            <div>
              <input
                type="text"
                placeholder=" recepcionista.... operador...."
                value={newProfile} // ppor que no me aharra como value el newProfile?
                onChange={(e) => {
                  console.log(newProfile);
                  setNewProfile(e.target.value);
                }}
              />
              <div>
                <button
                  disabled={!selectedDepartament || !newProfile.length}
                  onClick={() => {
                    setNewProfilesArray((prevState) => {
                      if (prevState.length <= 0) {
                        return [newProfileCreate];
                      }
                      const value = [...prevState, newProfileCreate];
                      return value;
                    });
                    setNewProfile('');
                  }}
                >
                  <img src={createIcon} alt="create-icon" />
                  Agregar perfil
                </button>
                <button
                  className={styles.saveButton}
                  disabled={!selectedDepartament || !newProfilesArray.length}
                  onClick={() => {
                    // aca lanzamos la action para crear los perfiles del array
                    dispatch(createProfileAction(newProfilesArray));
                    openModalProfile();
                  }}
                >
                  <img src={saveIcon} alt="save-icon" />
                  Guardar
                </button>
              </div>
            </div>
            <div>
              {newProfilesArray?.map((element, index) => (
                <div className={styles.profileBox}>
                  <h3>{element.profileName}</h3>
                  <h3>{`(${element.departament.departamentName})`}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
