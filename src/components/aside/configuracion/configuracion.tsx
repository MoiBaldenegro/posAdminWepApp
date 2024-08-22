import LinesConfigModule from './lines';
import styles from './configuracion.module.css';
// dependencies
import { NavLink } from 'react-router-dom';

interface Props {
  main: string;
  redLinePosition: number;
  handleBoard: (main: string, flag: boolean, value: number) => void;
}

export default function ConfigMenu({
  main,
  redLinePosition,
  handleBoard,
}: Props) {
  const deployItemClass = ({ isActive }: any) =>
    isActive ? styles.isActiveDeploy : styles.notActiveDeploy;
  const setMain = 'config';

  return (
    <div
      className={main === setMain ? styles.itemsDeployContainer : styles.hidden}
    >
      <LinesConfigModule redLinePosition={redLinePosition} />
      <div className={styles.containerDeployItemsClass}>
        <NavLink
          to="config/admin"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 1)}
        >
          Administrador
        </NavLink>
        <NavLink
          to="config/pos"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 2)}
        >
          Punto de venta
        </NavLink>
      </div>
    </div>
  );
}
