import LinesVentasModule from './lines';
import styles from './ventasMenu.module.css';
// dependencies
import { NavLink } from 'react-router-dom';

interface Props {
  main: string;
  redLinePosition: number;
  handleBoard: Function;
}

export default function VentasMenu({
  main,
  redLinePosition,
  handleBoard,
}: Props) {
  const deployItemClass = ({ isActive }: any) =>
    isActive ? styles.isActiveDeploy : styles.notActiveDeploy;

  return (
    <div
      className={
        main === 'ventas' ? styles.itemsDeployContainer : styles.hidden
      }
    >
      <LinesVentasModule redLinePosition={redLinePosition} />
      <div className={styles.containerDeployItemsClass}>
        <NavLink
          to="ventas/bills"
          className={deployItemClass}
          onClick={() => handleBoard('ventas', true, 1)}
        >
          Cuentas
        </NavLink>
        <NavLink
          to="ventas/notes"
          className={deployItemClass}
          onClick={() => handleBoard('ventas', true, 2)}
        >
          Notas
        </NavLink>
        <NavLink
          to="ventas/payments"
          className={deployItemClass}
          onClick={() => handleBoard('ventas', true, 3)}
        >
          Pagos
        </NavLink>
        <NavLink
          to="ventas/cancellations"
          className={deployItemClass}
          onClick={() => handleBoard('ventas', true, 4)}
        >
          Cancelaciones
        </NavLink>
        <NavLink
          to="ventas/cancellationsReasons"
          className={deployItemClass}
          onClick={() => handleBoard('ventas', true, 5)}
        >
          Motivos de cancelación
        </NavLink>
      </div>
    </div>
  );
}
