import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import dashboard from '../../assets/dashboard/dashboard.svg';
import arrow from '../../assets/dashboard/arrow.svg';
import catalogo from '../../assets/dashboard/catalogo.svg';
import ventas from '../../assets/dashboard/ventas.svg';
import ventasType from '../../assets/dashboard/ventaType.svg';
import promociones from '../../assets/dashboard/promociones.svg';
import caja from '../../assets/dashboard/caja.svg';
import reservaciones from '../../assets/dashboard/reservaciones.svg';
import tableros from '../../assets/dashboard/tableros.svg';
import usuarios from '../../assets/dashboard/usuarios.svg';
import mesas from '../../assets/dashboard/mesas.svg';
import reportes from '../../assets/dashboard/reportes.svg';
import divider from '../../assets/dashboard/divider.svg';
import config from '../../assets/dashboard/config.svg';
import ayuda from '../../assets/dashboard/ayuda.svg';
import line from '../../assets/dashboard/line.png';
import redLine from '../../assets/dashboard/redLine.png';

import styles from '../aside/aside.module.css';
import VentasMenu from './ventas/ventasMenu';
import useAside from '../../hooks/useAside';
import UsuariosMenu from './usuarios/usuariosMenu';
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
  const toggle = main === 'catalogo' ? 'hidden' : 'catalogo';
  const toggleTwo = main === 'ventas' ? 'lo que sea' : 'ventas';
  const toggleThree = main === 'usuariosMenu' ? 'lo que sea' : 'usuariosMenu';
  const activeClassName = ({ isActive }) =>
    isActive ? styles.isActive : styles.notActive;
  const deployItemClass = ({ isActive }) =>
    isActive ? styles.isActiveDeploy : styles.notActiveDeploy;

  return (
    <aside className={styles.aside}>
      <div className={styles.sectionOne}>
        <NavLink to="catalogo/dashboard" className={activeClassName}>
          <img src={dashboard} className={styles.icon} alt="dashboard-icon" />
          <span className={styles.itemTittle}>Dashboard</span>
          <div className={styles.separator}></div>
        </NavLink>
        <NavLink
          onClick={() => handleBoard(toggle, !active, 1)}
          to="catalogo/categories"
          className={activeClassName}
        >
          <div className={styles.iconContainer}>
            <img src={catalogo} className={styles.icon} alt="catalogo-icon" />
            <span>Catálogo</span>
          </div>
          <img src={arrow} className={styles.arrowIcon} alt="icon" />
        </NavLink>
        <div
          className={
            main === 'catalogo' ? styles.itemsDeployContainer : styles.hidden
          }
        >
          <div className={styles.linesContainer}>
            <img src={line} className={styles.line} alt="line" />
            <img
              src={redLine}
              className={styles.redLine}
              style={
                redLinePosition === 1
                  ? { marginTop: '5px' }
                  : redLinePosition === 2
                  ? { marginTop: '55px' }
                  : redLinePosition === 3
                  ? { marginTop: '105px' }
                  : redLinePosition === 4
                  ? { marginTop: '155px' }
                  : { marginTop: '210px' }
              }
              alt="red-line"
            />
          </div>
          <div className={styles.containerDeployItemsClass}>
            <NavLink
              to="catalogo/categories"
              className={deployItemClass}
              onClick={() => handleBoard('catalogo', true, 1)}
            >
              Categorías
            </NavLink>
            <NavLink
              to="catalogo/products&prices"
              className={deployItemClass}
              onClick={() => handleBoard('catalogo', true, 2)}
            >
              Productos y precios
            </NavLink>
            <NavLink
              to="catalogo/dishes"
              className={deployItemClass}
              onClick={() => handleBoard('catalogo', true, 3)}
            >
              Complementos
            </NavLink>
            <NavLink
              to="catalogo/modifications"
              className={deployItemClass}
              onClick={() => handleBoard('catalogo', true, 4)}
            >
              Modificadores
            </NavLink>
            <NavLink
              to="catalogo/menus&recipes"
              className={deployItemClass}
              onClick={() => handleBoard('catalogo', true, 5)}
            >
              Menús y recetas
            </NavLink>
          </div>
        </div>
        <NavLink
          onClick={() => handleBoard(toggleTwo, !active, 1)}
          to="ventas/bills"
          className={activeClassName}
        >
          <div className={styles.iconContainer}>
            <img src={ventas} className={styles.icon} alt="ventas-icon" />
            <span>Ventas</span>
          </div>
          <img src={arrow} className={styles.arrowIcon} alt="icon" />
        </NavLink>
        <VentasMenu
          main={main}
          redLinePosition={redLinePosition}
          handleBoard={handleBoard}
        />
        <NavLink to="sellTypes/sellTypes" className={activeClassName}>
          <img src={ventasType} className={styles.icon} alt="tipos-de-venta" />
          <span className={styles.itemTittle}>Tipos de venta</span>
          <div className={styles.separator}></div>
        </NavLink>
        <NavLink to="discounts" className={activeClassName}>
          <div className={styles.iconContainer}>
            <img src={promociones} className={styles.icon} alt="promociones" />
            <span>Descuentos</span>
          </div>
          <img src={arrow} className={styles.arrowIcon} alt="icon" />
        </NavLink>
        <NavLink to="till/till" className={activeClassName}>
          <div className={styles.iconContainer}>
            <img src={caja} className={styles.icon} alt="caja" />
            <span>Caja</span>
          </div>
          <img src={arrow} className={styles.arrowIcon} alt="icon" />
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
        <NavLink to="panels" className={activeClassName}>
          <div className={styles.iconContainer}>
            <img src={tableros} className={styles.icon} alt="tableros" />
            <span>Tableros</span>
          </div>
          <img src={arrow} className={styles.arrowIcon} alt="icon" />
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
        <NavLink to="tables" className={activeClassName}>
          <div className={styles.iconContainer}>
            <img src={mesas} className={styles.icon} alt="mesas" />
            <span>Mesas</span>
          </div>
          <img src={arrow} className={styles.arrowIcon} alt="icon" />
        </NavLink>
        <NavLink to="reports/reports" className={activeClassName}>
          <img src={reportes} className={styles.icon} alt="reportes" />
          <span className={styles.itemTittle}>Reportes</span>
          <div className={styles.separator}></div>
        </NavLink>
      </div>
      <img src={divider} className={styles.iconDivider} alt="icon" />
      <div className={styles.sectionTwo}>
        <Link className={styles.iconConfig} to={'config'}>
          <img src={config} className={styles.icon} alt="configuraciones" />
          <span>Configuracion</span>
        </Link>
        <Link to="help" className={styles.iconAyuda}>
          <img src={ayuda} alt="ayuda" />
          <span>Ayuda</span>
        </Link>
      </div>
    </aside>
  );
}
