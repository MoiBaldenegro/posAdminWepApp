import LinesCatalogoModule from './lines';
import styles from './catalogo.module.css';
// dependencies
import { NavLink } from 'react-router-dom';

interface Props {
  main: string;
  redLinePosition: number;
  handleBoard: (main: string, flag: boolean, value: number) => void;
}

export default function CatalogoMenu({
  main,
  redLinePosition,
  handleBoard,
}: Props) {
  const deployItemClass = ({ isActive }: any) =>
    isActive ? styles.isActiveDeploy : styles.notActiveDeploy;
  const setMain = 'catalogo';

  return (
    <div
      className={main === setMain ? styles.itemsDeployContainer : styles.hidden}
    >
      <LinesCatalogoModule redLinePosition={redLinePosition} />
      <div className={styles.containerDeployItemsClass}>
        <NavLink
          to="catalogo/categories"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 1)}
        >
          Categorias
        </NavLink>
        <NavLink
          to="catalogo/products&prices"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 2)}
        >
          Productos y precios
        </NavLink>
        <NavLink
          to="catalogo/dishes"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 3)}
        >
          Complementos
        </NavLink>
        <NavLink
          to="catalogo/modifications"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 4)}
        >
          Modificadores
        </NavLink>
        <NavLink
          to="catalogo/menus&recipes"
          className={deployItemClass}
          onClick={() => handleBoard(setMain, true, 5)}
        >
          Recetas
        </NavLink>
      </div>
    </div>
  );
}
