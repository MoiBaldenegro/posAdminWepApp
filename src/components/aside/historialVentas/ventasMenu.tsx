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
          to="history/sells"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 1)}
        >
          Cuentas
        </NavLink>
        <NavLink
          to="history/payments"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 2)}
        >
          Pagos
        </NavLink>
        <NavLink
          to="history/reopenings"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 3)}
        >
          Reaperturas
        </NavLink>
        <NavLink
          to="history/discounts"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 4)}
        >
          Descuentos
        </NavLink>
        <NavLink
          to="history/cancellations"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 5)}
        >
          Cancelaciones
        </NavLink>
        <NavLink
          to="history/courtesies"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 6)}
        >
          Cortesias
        </NavLink>
        <NavLink
          to="history/close-till"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 7)}
        >
          Cierre de caja
        </NavLink>
        <NavLink
          to="history/incoming"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 8)}
        >
          Ingresos y egresos
        </NavLink>
        <NavLink
          to="history/withdrawals"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 9)}
        >
          Retiros parciales
        </NavLink>
        <NavLink
          to="history/periods"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 10)}
        >
          Cierres operativos
        </NavLink>
      </div>
    </div>
  );
}
