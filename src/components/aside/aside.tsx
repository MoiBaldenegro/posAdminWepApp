import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import dashboard from '../../assets/dashboard/dashboard.svg';
import arrow from '../../assets/dashboard/arrow.svg';
import catalogo from '../../assets/dashboard/catalogo.svg';
import ventas from '../../assets/dashboard/ventas.svg';
import reservaciones from '../../assets/dashboard/reservaciones.svg';
import tableros from '../../assets/dashboard/tableros.svg';
import usuarios from '../../assets/dashboard/usuarios.svg';
import mesas from '../../assets/dashboard/mesas.svg';
import reportes from '../../assets/dashboard/reportes.svg';
import config from '../../assets/dashboard/config.svg';
import ayuda from '../../assets/dashboard/ayuda.svg';
import clock from '../../assets/public/clockAside.svg';
import styles from '../aside/aside.module.css';
import UsuariosMenu from './usuarios/usuariosMenu';
import phones from '../../assets/public/phones.svg';
import HistorialDeVentas from './historialVentas/ventasMenu';
import VentasMenu from './ventas/ventasMenu';
import CatalogoMenu from './catalogo/catalogo';
import ConfigMenu from './configuracion/configuracion';

// Actions
export default function Aside() {
  // const [ toggle, main, active, handleBoard, redLinePosition ] : any = useAside();
  const [main, setMain] = useState('');
  const [active, setActive] = useState(true);
  const [redLinePosition, setRedLinePosition] = useState(6);

  const handleBoard = (value: any, activeValue: any, positionLine: any) => {
    setMain(value);
    setActive(activeValue);
    setRedLinePosition(positionLine);
  };

  const path = window.location.pathname.split('/')[2];

  const toggle = main === 'catalogo' ? 'lo que sea' : 'catalogo';
  const toggleTwo = main === 'ventas' ? 'lo que sea' : 'ventas';
  const toggleThree = main === 'usuariosMenu' ? 'lo que sea' : 'usuariosMenu';
  const toggleSix = main === 'config' ? 'lo que sea' : 'config';
  const toggleFour =
    main === 'historialDeVentas' ? 'lo que sea' : 'historialDeVentas';
  const activeClassName = ({ isActive }) =>
    isActive ? styles.isActive : styles.notActive;
  /* 
  const deployItemClass = ({ isActive }) =>
    isActive ? styles.isActiveDeploy : styles.notActiveDeploy;
  */

  return (
    <aside className={styles.aside}>
      <div className={styles.sectionOne}>
        <NavLink
          to="dashboard/index"
          className={activeClassName}
          style={path === 'dashboard' ? { background: '#ebebeb41' } : {}}
        >
          <img src={dashboard} className={styles.icon} alt="dashboard-icon" />
          <span className={styles.itemTittle}>Dashboard</span>
          <div className={styles.separator}></div>
        </NavLink>
        <NavLink
          style={path === 'catalogo' ? { background: '#ebebeb41' } : {}}
          onClick={() => handleBoard(toggle, !active, 1)}
          to="catalogo/categories"
          className={activeClassName}
        >
          <div className={styles.iconContainer}>
            <img src={catalogo} className={styles.icon} alt="catalogo-icon" />
            <span>Catálogo</span>
          </div>
          <img
            src={arrow}
            className={styles.arrowIcon}
            alt="icon"
            style={path === 'catalogo' ? { transform: 'rotate(180deg)' } : {}}
          />
        </NavLink>
        <CatalogoMenu
          main={main}
          redLinePosition={redLinePosition}
          handleBoard={handleBoard}
        />
        <NavLink
          onClick={() => handleBoard(toggleTwo, !active, 1)}
          to="ventas/bills"
          className={activeClassName}
          style={path === 'ventas' ? { background: '#ebebeb41' } : {}}
        >
          <div className={styles.iconContainer}>
            <img src={clock} className={styles.icon} alt="ventas-icon" />
            <span>Periodo operativo</span>
          </div>
          <img
            src={arrow}
            className={styles.arrowIcon}
            alt="icon"
            style={path === 'ventas' ? { transform: 'rotate(180deg)' } : {}}
          />
        </NavLink>
        <VentasMenu
          main={main}
          redLinePosition={redLinePosition}
          handleBoard={handleBoard}
        />
        <NavLink
          onClick={() => handleBoard(toggleFour, !active, 1)}
          to="history/sells"
          className={activeClassName}
        >
          <div className={styles.iconContainer}>
            <img src={ventas} className={styles.icon} alt="ventas-icon" />
            <span>Historial de ventas</span>
          </div>
          <img src={arrow} className={styles.arrowIcon} alt="icon" />
        </NavLink>
        <HistorialDeVentas
          main={main}
          redLinePosition={redLinePosition}
          handleBoard={handleBoard}
        />

        <NavLink to="panels/index" className={activeClassName}>
          <div className={styles.iconContainer}>
            <img src={tableros} className={styles.icon} alt="tableros" />
            <span>Tableros</span>
          </div>
        </NavLink>
        <NavLink
          to="usuarios/shifts"
          className={activeClassName}
          onClick={() => handleBoard(toggleThree, !active, 1)}
        >
          <div className={styles.iconContainer}>
            <img src={usuarios} className={styles.icon} alt="usuarios" />
            <span>Usuarios</span>
          </div>
          <img src={arrow} className={styles.arrowIcon} alt="icon" />
        </NavLink>
        <UsuariosMenu
          main={main}
          redLinePosition={redLinePosition}
          handleBoard={handleBoard}
        />
        <NavLink to="tables/index" className={activeClassName}>
          <div className={styles.iconContainer}>
            <img src={mesas} className={styles.icon} alt="mesas" />
            <span>Mesas</span>
          </div>
        </NavLink>
        <NavLink to="reservations" className={activeClassName}>
          <img
            src={reservaciones}
            className={styles.icon}
            alt="reservaciones"
          />
          <span>Reservaciones</span>
          <div className={styles.separator}></div>
        </NavLink>
        <NavLink to="reports/reports" className={activeClassName}>
          <img src={reportes} className={styles.icon} alt="reportes" />
          <span className={styles.itemTittle}>Reportes</span>
          <div className={styles.separator}></div>
        </NavLink>
        <NavLink
          to="config/admin"
          className={activeClassName}
          onClick={() => handleBoard(toggleSix, !active, 1)}
        >
          <img src={config} className={styles.icon} alt="tipos-de-venta" />
          <span className={styles.itemTittle}>Configuracion</span>
          <div className={styles.separator}></div>
          <img src={arrow} className={styles.arrowIcon} alt="icon" />
        </NavLink>
        <ConfigMenu
          main={main}
          redLinePosition={redLinePosition}
          handleBoard={handleBoard}
        />
      </div>
      <div className={styles.sectionTwo}>
        <Link className={styles.iconConfig} to={'config'}>
          <img src={phones} className={styles.icon} alt="configuraciones" />
          <span>Contactar al soporte</span>
        </Link>
        <Link to="help" className={styles.iconAyuda}>
          <img src={ayuda} alt="ayuda" />
          <span>Centro de ayuda</span>
        </Link>
      </div>
    </aside>
  );
}
