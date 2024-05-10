import styles from './register.module.css';
import dateIcon from './../../../../../assets/public/clockIcon.svg';
import rightArrow from '../../../../../assets/public/arrowRigth.svg';
import leftArrow from '../../../../../assets/public/arrowLeft.svg';
import saveIcon from '../../../../../assets/public/disquetIcon.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDepartamentsAction } from '../../../../../redux/actions/usuarios/departamentsActions/getDepartaments';
import { createUser } from '../../../../../redux/actions/auth';
import useValidation from '../../../../../hooks/useValidation';
import warningIcon from '../../../../../assets/public/warningIcon.svg';
import { getShiftsAction } from '../../../../../redux/actions/usuarios/shiftsActions/getShifts';
import arrowSewlect from '../../../../../assets/public/arrow.svg';
import { getProfilesAction } from '../../../../../redux/actions/usuarios/profilesActions/getProfiles';

interface Props {
  isOpen: any;
  onClose: any;
  children: any;
  setEmployee: (arg: any) => void;
  currentEmployee: any;
  openModal: any;
}
export default function Register({
  isOpen,
  onClose,
  children,
  setEmployee,
  currentEmployee,
  openModal,
}: Props) {
  const {
    validationRegisterFirst,
    validationRegisterThird,
    validate,
    message,
    setMessage,
    secondMessage,
    thirdMessage,
    setThirdMessage,
    setSecondMessage,
    thirdValidate,
  } = useValidation();
  const [lastName, setLastName] = useState({
    first: '',
    second: '',
  });
  const [sequence, setSequence] = useState(1);
  const [toggleShift, setToggleShift] = useState(false);
  const dispatch = useDispatch();
  const { allDepartaments } = useSelector((state) => state.departaments);
  const { allShifts } = useSelector((state) => state.shifts);
  const { allProfiles } = useSelector((state) => state.profiles);

  useEffect(() => {
    dispatch(getDepartamentsAction());
    dispatch(getShiftsAction());
    dispatch(getProfilesAction());
  }, []);

  const handleChange = () => {
    if (thirdMessage.length) {
      setThirdMessage(thirdValidate);
    }
    if (message.length) {
      setMessage(validate);
    }
    const lastNameConcat = lastName.first.concat(' ');
    const lastNameComplete = lastNameConcat.concat(lastName.second);
    const newUser = {
      ...currentEmployee,
      lastName: lastNameComplete,
    };
    validationRegisterFirst(newUser, lastName);
    validationRegisterThird(newUser, lastName);
  };
  return (
    <main className={styles.screen}>
      <section className={styles.modal}>
        <button
          className={styles.closeButton}
          onClick={() => {
            onClose();
            setEmployee({});
          }}
        >
          X
        </button>
        <div className={styles.head}>{children}</div>
        <div className={styles.process}>
          <div className={styles.barOne}></div>
          <div
            className={
              sequence === 1
                ? styles.barOne
                : sequence === 2
                ? styles.barTwo
                : styles.barThree
            }
          >
            {' '}
          </div>
          <div className={styles.One}>
            <span>1</span>
          </div>
          <div
            className={
              sequence > 1 && sequence < 4 ? styles.active : styles.Two
            }
          >
            <span>2</span>
          </div>
          <div
            className={
              sequence > 2 && sequence < 4 ? styles.active : styles.Two
            }
          >
            <span>3</span>
          </div>
          <span className={styles.tittleOne}>Datos</span>
          <span className={styles.tittleTwo}>Perfiles</span>
          <span className={styles.tittleThree}>Accesos</span>
        </div>

        {sequence === 1 ? (
          <>
            <div className={styles.dataUser}>
              <h2>Datos personales</h2>
              <input
                placeholder="Apellido paterno"
                type="text"
                onChange={(e) => {
                  const { value } = e.target;
                  setLastName({ ...lastName, first: value });
                  handleChange();
                }}
              />
              <input
                placeholder="Apellido materno"
                type="text"
                onChange={(e) => {
                  const { value } = e.target;
                  setLastName({ ...lastName, second: value });
                  handleChange();
                }}
              />
              <input
                placeholder="Nombre(s)"
                type="text"
                onChange={(e) => {
                  const { value } = e.target;
                  setEmployee({ ...currentEmployee, name: value });
                  handleChange();
                }}
              />
            </div>
            <div className={styles.dataJob}>
              <h2>Datos laborales</h2>
              <div className={styles.customDate}>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  required
                  onChange={(e) => {
                    const { value } = e.target;
                    setEmployee({ ...currentEmployee, entryDate: value });
                    handleChange();
                  }}
                />
                <label htmlFor="fecha">Fecha de ingreso</label>
                <img src={dateIcon} alt="date-icon" />
              </div>
              <div className={styles.containerInput}>
                <div className={styles.categoriesSelect}>
                  <div
                    className={styles.customSelect}
                    onClick={() => {
                      setToggleShift(!toggleShift);
                    }}
                  >
                    <div className={styles.selectTrigger}>
                      <span>
                        {currentEmployee.shift?.length
                          ? currentEmployee.shift
                          : 'Turno'}
                      </span>
                      <img
                        src={arrowSewlect}
                        alt=""
                        className={styles.arrowSelect}
                      />
                    </div>
                    <div
                      className={toggleShift ? styles.options : styles.hidden}
                    >
                      {allShifts?.map((element) => (
                        <>
                          <span
                            className={styles.option}
                            onClick={(e) => {
                              setEmployee({
                                ...currentEmployee,
                                shift: element.shiftName,
                              });
                              handleChange();
                              console.log(currentEmployee);
                            }}
                          >
                            {element.shiftName}
                          </span>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.validation}>
              {message ? <img src={warningIcon} alt="warning-icon" /> : null}
              <span>{message}</span>
            </div>
          </>
        ) : sequence === 2 ? (
          <>
            <article>
              <div>
                <h2>Departamentos</h2>
                {allDepartaments?.map((element, index) => (
                  <button className={styles.filterButton}>
                    {element.departamentName}
                  </button>
                ))}
              </div>
              <div>
                <h2>Perfiles</h2>
                <form action="">
                  {allProfiles?.map((element, index) => (
                    <div className={styles.radioContainer}>
                      <input
                        type="radio"
                        id={element._id}
                        name="dapartaments"
                        value={element.profileName}
                        onChange={(e) => {
                          setSecondMessage('');
                          handleChange();
                          const { value } = e.target;
                          setEmployee({
                            ...currentEmployee,
                            role: element._id,
                          }); /////////////////
                        }}
                      />
                      <label htmlFor={element._id}>{element.profileName}</label>
                    </div>
                  ))}
                </form>
              </div>
            </article>
            <div className={styles.validation}>
              {secondMessage ? (
                <img src={warningIcon} alt="warning-icon" />
              ) : null}
              <span>{secondMessage}</span>
            </div>
          </>
        ) : sequence === 3 ? (
          <div className={styles.third}>
            <div>
              <h3>Acceso al administrador</h3>
              <input
                type="text"
                placeholder="example@example.com"
                onChange={(e) => {
                  const { value } = e.target;
                  setEmployee({ ...currentEmployee, email: value });
                  handleChange();
                  setThirdMessage(thirdValidate);
                }}
              />
              <input
                type="password"
                placeholder="*********"
                onChange={(e) => {
                  handleChange();
                  setThirdMessage(thirdValidate);
                  const { value } = e.target;
                  setEmployee({ ...currentEmployee, password: value });
                }}
              />
            </div>
            <div>
              <h3>Acceso al punto de venta</h3>
              <h4>Codigo de empleado: 0006</h4>
              <input
                type="password"
                placeholder="*********"
                onChange={(e) => {
                  const { value } = e.target;
                  setEmployee({ ...currentEmployee, pinPos: value });
                  handleChange();
                  setThirdMessage(thirdValidate);
                }}
              />
            </div>
            <div className={styles.validation}>
              {thirdMessage ? (
                <img src={warningIcon} alt="warning-icon" />
              ) : null}
              <span>{thirdMessage}</span>
            </div>
          </div>
        ) : null}
        <footer>
          {sequence > 1 && sequence < 4 ? (
            <button
              onClick={() => {
                setSequence(sequence - 1);
              }}
            >
              <img src={leftArrow} alt="arrow-icon" />
              Anterior
            </button>
          ) : null}
          {sequence < 3 ? (
            <button
              onClick={() => {
                const lastNameConcat = lastName.first.concat(' ');
                const lastNameComplete = lastNameConcat.concat(lastName.second);
                const newUser = {
                  ...currentEmployee,
                  lastName: lastNameComplete,
                };

                if (
                  !newUser.lastName?.length ||
                  !newUser.name?.length ||
                  !newUser.entryDate?.length ||
                  !newUser.shift?.length ||
                  !lastName.first.length ||
                  !lastName.second.length
                ) {
                  if (
                    !newUser.shift?.length &&
                    newUser.lastName?.length &&
                    newUser.entryDate?.length
                  ) {
                    setMessage('Selecciona un turno para el usuario');
                    return;
                  }
                  setMessage(
                    'Ingresa los datos del usuario antes de continuar',
                  );
                  return;
                } else if (!validate && sequence === 1) {
                  setSequence(sequence + 1);
                } else if (
                  sequence > 1 &&
                  sequence < 3 &&
                  !newUser.role?.length
                ) {
                  setSecondMessage('Selecciona un perfil para el usuario');
                } else {
                  setSequence(sequence + 1);
                }
              }}
            >
              <img src={rightArrow} alt="arrow-icon" />
              Siguiente
            </button>
          ) : (
            <button
              disabled={
                thirdMessage.length > 0 ||
                !currentEmployee.email ||
                !currentEmployee.password ||
                !currentEmployee.pinPos
              }
              className={styles.saveButton}
              onClick={() => {
                openModal();
                if (thirdValidate) {
                  setThirdMessage(thirdMessage);
                }
                const lastNameConcat = lastName.first.concat(' ');
                const lastNameComplete = lastNameConcat.concat(lastName.second);
                const newUser = {
                  ...currentEmployee,
                  lastName: lastNameComplete,
                };
                console.log('Aca el ususario nuevoi');
                console.log(newUser);
                dispatch(createUser(newUser));
              }}
            >
              <img src={saveIcon} alt="arrow-icon" />
              Guardar
            </button>
          )}
        </footer>
      </section>
    </main>
  );
}
