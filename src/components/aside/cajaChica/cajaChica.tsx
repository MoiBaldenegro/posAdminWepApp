import LinesVentasModule from './lines';
import styles from './cajaChica.module.css';
// dependencies
import { NavLink } from 'react-router-dom';

interface Props {
  main: string;
  redLinePosition: number;
  handleBoard: Function;
}

export default function CajaChicaMenu({
  main,
  redLinePosition,
  handleBoard,
}: Props) {
  const deployItemClass = ({ isActive }: any) =>
    isActive ? styles.isActiveDeploy : styles.notActiveDeploy;
  const setMain = 'cajaChica';

  return (
    <div
      className={main === setMain ? styles.itemsDeployContainer : styles.hidden}
    >
      <LinesVentasModule redLinePosition={redLinePosition} />
      <div className={styles.containerDeployItemsClass}>
        <NavLink
          to="ventas/bills"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 1)}
        >
          Retiros Parciales
        </NavLink>
        <NavLink
          to="ventas/bills"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 2)}
        >
          Ingresos
        </NavLink>
        <NavLink
          to="ventas/bills"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 3)}
        >
          Egresos
        </NavLink>
      </div>
    </div>
  );
}
