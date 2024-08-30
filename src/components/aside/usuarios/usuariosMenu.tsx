import LinesUsuariosModule from './lines';
import styles from '../ventas/ventasMenu.module.css';

// dependencies
import { NavLink } from 'react-router-dom';

interface Props {
  main: string;
  redLinePosition: number;
  handleBoard: Function;
}

export default function UsuariosMenu({
  main,
  redLinePosition,
  handleBoard,
}: Props) {
  const deployItemClass = ({ isActive }: any) =>
    isActive ? styles.isActiveDeploy : styles.notActiveDeploy;

  return (
    <div
      className={
        main === 'usuariosMenu' ? styles.itemsDeployContainer : styles.hidden
      }
    >
      <LinesUsuariosModule redLinePosition={redLinePosition} />
      <div className={styles.containerDeployItemsClass}>
        <NavLink
          to="usuarios/shifts"
          className={deployItemClass}
          onClick={() => handleBoard('usuariosMenu', true, 1)}
        >
          Turnos
        </NavLink>

        <NavLink
          to="usuarios/profiles"
          className={deployItemClass}
          onClick={() => handleBoard('usuariosMenu', true, 2)}
        >
          Perfiles
        </NavLink>
        <NavLink
          to="usuarios/employees"
          className={deployItemClass}
          onClick={() => handleBoard('usuariosMenu', true, 3)}
        >
          Empleados
        </NavLink>
        <NavLink
          to="usuarios/authorizations"
          className={deployItemClass}
          onClick={() => handleBoard('usuariosMenu', true, 4)}
        >
          Autorizaciones
        </NavLink>
        <NavLink
          to="usuarios/assistants"
          className={deployItemClass}
          onClick={() => handleBoard('usuariosMenu', true, 5)}
        >
          Asistencias
        </NavLink>
      </div>
    </div>
  );
}
