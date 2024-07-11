import LinesVentasModule from './lines';
import styles from './ventasMenu.module.css';
// dependencies
import { NavLink } from 'react-router-dom';

interface Props {
  main: string;
  redLinePosition: number;
  handleBoard: Function;
}

export default function HistorialDeVentas({
  main,
  redLinePosition,
  handleBoard,
}: Props) {
  const deployItemClass = ({ isActive }: any) =>
    isActive ? styles.isActiveDeploy : styles.notActiveDeploy;

  const setMain = 'historialDeVentas';

  return (
    <div
      className={main === setMain ? styles.itemsDeployContainer : styles.hidden}
    >
      <LinesVentasModule redLinePosition={redLinePosition} />
      <div className={styles.containerDeployItemsClass}>
        <NavLink
          to="historialDeVentas/bills"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 1)}
        >
          Cuentas
        </NavLink>
        <NavLink
          to="historialDeVentas/payments"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 2)}
        >
          Pagos
        </NavLink>
        <NavLink
          to="historialDeVentas/reopenings"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 3)}
        >
          Reaperturas
        </NavLink>
        <NavLink
          to="historialDeVentas/discounts"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 4)}
        >
          Descuentos
        </NavLink>
        <NavLink
          to="historialDeVentas/cancellations"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 5)}
        >
          Cancelaciones
        </NavLink>
        <NavLink
          to="historialDeVentas/courtesies"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 5)}
        >
          Cortesias
        </NavLink>
        <NavLink
          to="historialDeVentas/closeouts"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 5)}
        >
          Cierre de caja
        </NavLink>
      </div>
    </div>
  );
}
