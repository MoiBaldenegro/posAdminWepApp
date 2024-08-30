import styles from './loginPage.module.css';
import { Link, Navigate } from 'react-router-dom';

// Dependencies
import { NavLink, useNavigate } from 'react-router-dom';

// icons
import arrow from '../../assets/loginPage/arrow.svg';
import tomateLogo from '../../assets/loginPage/tomateLogo.svg';
import footerRight from '../../assets/loginPage/footerImgRight.svg';
import eyeClose from '../../assets/loginPage/eyeClose.svg';
import eyeOpen from '../../assets/loginPage/eyeOpen.svg';
import error from '../../assets/loginPage/error.svg';
import eyeActive from '../../assets/loginPage/eyeActive.svg';
//hooks
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions/auth';

export default function LoginPage() {
  const { loginUsers } = useSelector((state) => state.auth);
  const { errors } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [passVisibility, setPassVisibility] = useState(false);
  const [lenguajeSelect, setLenguajeSelect] = useState(false);
  const toggleVisibilityPass = () => {
    setPassVisibility(!passVisibility);
  };
  const toggleLenguaje = () => {
    setLenguajeSelect(!lenguajeSelect);
  };

  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event: any) => {
    event?.preventDefault();
    setUser({
      ...user,
      [event?.target.name]: event?.target.value,
    });
  };
  const eyeClassName = passVisibility
    ? eyeClose
    : user.password.length > 0
    ? eyeActive
    : eyeOpen; // logica para la activacion y cambio del ojo en el input password

  const onSubmit = () => {
    dispatch(loginUser(user));
    navigate('/home');
  };

  if (loginUsers.length > 0) {
    return <Navigate to="/home" />;
  }

  return (
    <div className={styles.loginPage}>
      <header className={styles.header}>
        <div className={styles.lenguajeSelect}>
          <div className={styles.customSelect} onClick={toggleLenguaje}>
            <div className={styles.selectTrigger}>
              <span> Español </span>
              <img src={arrow} alt="" className={styles.arrowSelect} />
            </div>
            <div className={lenguajeSelect ? styles.options : styles.hidden}>
              <span className={styles.option}>English</span>
              <span className={styles.option}> French</span>
              <span className={styles.option}>摩西</span>
            </div>
          </div>
        </div>
        <div>
          {/*   <span>   No tienes una cuenta? <Link to={"/auth/register"}>Crea una aqui </Link></span> */}
        </div>
      </header>
      <main className={styles.centerContainer}>
        <div className={styles.logoContainer}>
          <span className={styles.bienvenido}>Bienvenido</span>
          <img src={tomateLogo} alt="" />
        </div>
        <div className={styles.formContainer}>
          <span className={styles.formTittle}>Iniciar sesión</span>
          <div className={styles.form}>
            <div className={styles.inputForm}>
              <input
                name="email"
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
                type="email"
                required
                className={styles.inputForm}
              />
            </div>
            <div className={styles.inputForm}>
              <input
                name="password"
                onChange={handleChange}
                placeholder="Contraseña"
                type={passVisibility ? 'text' : 'password'}
                required
                minLength={6}
                className={styles.inputFormIn}
              />
              <img
                src={eyeClassName /*passVisibility ? eyeOpen : eyeClose*/}
                alt="pass-visibility"
                className={styles.eye}
                onClick={toggleVisibilityPass}
              />
            </div>
            <div className={styles.checkboxContainer}>
              <div className={styles.checkboxInputContainer}>
                <input
                  id="mi-checkbox"
                  className={styles.checkboxInputNew}
                  type="checkbox"
                />
                <span className={styles.checkboxLabel}>Recordar sesión</span>
              </div>
              <Link className={styles.pass}>¿Olvidaste tu contraseña?</Link>
            </div>
            <button
              onClick={onSubmit}
              type="submit"
              disabled={user.email.length < 1 || user.password.length < 1}
              className={styles.btnEntrar}
            >
              Entrar
            </button>
          </div>
          {errors.length > 0 ? (
            <div className={styles.errors}>
              <img src={error} alt="" />
              <span className={styles.errorMessage}>{errors}</span>
            </div>
          ) : (
            ''
          )}
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.linksContainer}>
          <NavLink className={styles.links} to="#avisoDePrivacidad" id="">
            Aviso de privacidad
          </NavLink>
          <span>|</span>
          <NavLink className={styles.links} to="#avisoDePrivacidad" id="">
            Términos y condiciones
          </NavLink>
          <span>|</span>
          <NavLink className={styles.links} to="#avisoDePrivacidad" id="">
            Soporte técnico
          </NavLink>
        </div>
        <img
          className={styles.copyrigth}
          src={footerRight}
          alt="tomate-copyrigth"
        />
      </footer>
    </div>
  );
}
