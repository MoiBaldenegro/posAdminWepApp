import { useEffect } from 'react';
import styles from './notaDetails.module.css';
// Icons
import leftArrow from '../../../../../../../assets/public/leftArrow.svg';
import enabledIcon from '../../../../../../../assets/public/StatusIcon(enabled).svg';
import disabledIcon from '../../../../../../../assets/public/StatusIcon(disabled).svg';
import pendingIcon from '../../../../../../../assets/public/StatusIcon(pending).svg';
import arrowRightSmall from '../../../../../../../assets/public/arrowRightSmall.svg';
import commentIcon from '../../../../../../../assets/public/comentsIcon.svg';
interface Props {
  element: any;
  isOpen: any;
  onClose: any;
  children: any;
}
export default function NotesDetailsIntern({
  element,
  isOpen,
  onClose,
  children,
}: Props) {
  useEffect(() => {
    console.log(element);
  });
  return (
    <div className={styles.screen}>
      <section className={styles.modal}>
        <div className={styles.sectionFirst}>
          <img src={leftArrow} alt="left-arrow-icon" onClick={onClose} />

          <h1 className={styles.tittleHead}>
            {children} {element.billCode}
          </h1>
          <div className={styles.statusIndicator}>
            {element.status === 'enabled' ? (
              <img src={enabledIcon} alt="enabled-icon" onClick={onClose} />
            ) : element.status === 'disabled' ? (
              <img src={disabledIcon} alt="disabled-icon" onClick={onClose} />
            ) : (
              <img src={pendingIcon} alt="pending-icon" onClick={onClose} />
            )}
            <span>
              {element.status === 'enabled'
                ? 'Activa'
                : element.status === 'disabled'
                ? 'Inactiva'
                : 'other'}
            </span>
          </div>
        </div>
        <div className={styles.sectionTwo}>
          <div className={styles.detailsContainer}>
            <div className={styles.detailsInOne}>
              <div className={styles.detailsHead}>General</div>
              <div className={styles.detailsContent}>
                <div className={styles.itemContainer}>
                  <h5>Fecha de creación</h5>
                  <h5>{element.createdAt.slice(1, 16)}</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Tipo de venta</h5>
                  <h5>{element.sellType}</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Mesa</h5>
                  <h5>
                    # <img src={arrowRightSmall} alt="arror-icon-small" /> #
                  </h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Abierta por</h5>
                  <h5>{element.user}</h5>
                </div>
              </div>
            </div>
            <div className={styles.detailsInOne}>
              <div className={styles.detailsHead}>Nota</div>
              <div className={styles.detailsContentTwo}>
                <div className={styles.itemContainer}>
                  <h5>Nombre de nota</h5>
                  <h5>-</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Número de comensales</h5>
                  <h5>#valor</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Número de notas</h5>
                  <h5>-</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Comentarios</h5>
                  <h5>
                    #Comentario <img src={commentIcon} alt="comment-icon" />
                  </h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Cantidad de productos</h5>
                  <h5>#valor</h5>
                </div>
              </div>
            </div>
            <div className={styles.detailsInOne}>
              <div className={styles.detailsHead}>Descuento de la nota</div>
              <div className={styles.detailsContentTwo}>
                <div className={styles.itemContainer}>
                  <h5>Descuento realizado por</h5>
                  <h5>{element.user}</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Descuento realizado a</h5>
                  <h5>{element.user}</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Motivo de descuento</h5>
                  <h5>
                    <strong>Cortesia</strong>
                    <h5>
                      <img src={commentIcon} alt="comment-icon" />
                    </h5>
                  </h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Hora de descuento</h5>
                  <h5>12:00</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Porcentaje de descuento</h5>
                  <h5>10%</h5>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.detailsFirst}>
            <h2 className={styles.tableTittle}>Productos</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tHeadNote}>Nota</th>
                  <th className={styles.tHeadNote}>Orden</th>
                  <th className={styles.tHeadNote}>Categoria</th>
                  <th className={styles.tHeadNote}>Producto</th>
                  <th className={styles.tHeadNote}>Cantidad</th>
                  <th className={styles.tHeadNote}>Precio</th>
                  <th className={styles.tHeadNote}>Descuento</th>
                  <th className={styles.tHeadNote}>Importe</th>
                  <th className={styles.tHeadNote}>Enviado por</th>
                  <th className={styles.tHeadNote}>Cancelado por</th>
                  <th className={styles.tHeadNote}>Info</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.release}>
                  <td className={styles.tableRows}>1</td>
                  <td className={styles.tableRows}>2</td>
                  <td className={styles.tableRows}>Refrescos</td>
                  <td className={styles.tableRows}>Agua mineral</td>
                  <td className={styles.tableRows}>1</td>
                  <td className={styles.tableRows}>$39.00</td>
                  <td className={styles.tableRows}>-</td>
                  <td className={styles.tableRows}>$35.00</td>
                  <td className={styles.tableRows}>{element.user}</td>
                  <td className={styles.tableRows}>{element.user}</td>
                  <td className={styles.tableRows}>
                    <img src={commentIcon} alt="comment-icon" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.detailsFirst}>
            <h2 className={styles.tableTittle}>Impresion de comandas</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tHeadNote}>Folio</th>
                  <th className={styles.tHeadNote}>Impreso por</th>
                  <th className={styles.tHeadNote}>Terminal</th>
                  <th className={styles.tHeadNote}>Impresora</th>
                  <th className={styles.tHeadNote}>Folio de nota</th>
                  <th className={styles.tHeadNote}>Hora de impresion</th>
                  <th className={styles.tHeadNote}>Hora de solicitud</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.release}>
                  <td className={styles.tableRows}>000000</td>
                  <td className={styles.tableRows}>{element.user}</td>
                  <td className={styles.tableRows}>100</td>
                  <td className={styles.tableRows}>{'(1)'} Bebidas</td>
                  <td className={styles.tableRows}>000000</td>
                  <td className={styles.tableRows}>
                    {element.createdAt.slice(1, 9)}
                    {element.createdAt.slice(11, 16)}
                  </td>
                  <td className={styles.tableRows}>
                    {element.createdAt.slice(1, 9)}
                    {element.createdAt.slice(11, 16)}
                  </td>
                </tr>
                <tr className={styles.release}>
                  <td className={styles.tableRows}>000000</td>
                  <td className={styles.tableRows}>{element.user}</td>
                  <td className={styles.tableRows}>100</td>
                  <td className={styles.tableRows}>{'(1)'} Bebidas</td>
                  <td className={styles.tableRows}>000000</td>
                  <td className={styles.tableRows}>
                    {element.createdAt.slice(1, 9)}
                    {element.createdAt.slice(11, 16)}
                  </td>
                  <td className={styles.tableRows}>
                    {element.createdAt.slice(1, 9)}
                    {element.createdAt.slice(11, 16)}
                  </td>
                </tr>
                <tr className={styles.release}>
                  <td className={styles.tableRows}>000000</td>
                  <td className={styles.tableRows}>{element.user}</td>
                  <td className={styles.tableRows}>100</td>
                  <td className={styles.tableRows}>{'(1)'} Bebidas</td>
                  <td className={styles.tableRows}>000000</td>
                  <td className={styles.tableRows}>
                    {element.createdAt.slice(1, 9)}
                    {element.createdAt.slice(11, 16)}
                  </td>
                  <td className={styles.tableRows}>
                    {element.createdAt.slice(1, 9)}
                    {element.createdAt.slice(11, 16)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.detailsFirst}>
            <h2 className={styles.tableTittle}>Impresion de notas</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tHeadNote}>Folio</th>
                  <th className={styles.tHeadNote}>Impreso por</th>
                  <th className={styles.tHeadNote}>Terminal</th>
                  <th className={styles.tHeadNote}>Impresora</th>
                  <th className={styles.tHeadNote}>Folio de nota</th>
                  <th className={styles.tHeadNote}>Hora de impresion</th>
                  <th className={styles.tHeadNote}>Hora de solicitud</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.release}>
                  <td className={styles.tableRows}>000000</td>
                  <td className={styles.tableRows}>{element.user}</td>
                  <td className={styles.tableRows}>100</td>
                  <td className={styles.tableRows}>{'(1)'} Bebidas</td>
                  <td className={styles.tableRows}>000000</td>
                  <td className={styles.tableRows}>
                    {element.createdAt.slice(1, 9)}
                    {element.createdAt.slice(11, 16)}
                  </td>
                  <td className={styles.tableRows}>
                    {element.createdAt.slice(1, 9)}
                    {element.createdAt.slice(11, 16)}
                  </td>
                </tr>
                <tr className={styles.release}>
                  <td className={styles.tableRows}>000000</td>
                  <td className={styles.tableRows}>{element.user}</td>
                  <td className={styles.tableRows}>100</td>
                  <td className={styles.tableRows}>{'(1)'} Bebidas</td>
                  <td className={styles.tableRows}>000000</td>
                  <td className={styles.tableRows}>
                    {element.createdAt.slice(1, 9)}
                    {element.createdAt.slice(11, 16)}
                  </td>
                  <td className={styles.tableRows}>
                    {element.createdAt.slice(1, 9)}
                    {element.createdAt.slice(11, 16)}
                  </td>
                </tr>
                <tr className={styles.release}>
                  <td className={styles.tableRows}>000000</td>
                  <td className={styles.tableRows}>{element.user}</td>
                  <td className={styles.tableRows}>100</td>
                  <td className={styles.tableRows}>{'(1)'} Bebidas</td>
                  <td className={styles.tableRows}>000000</td>
                  <td className={styles.tableRows}>
                    {element.createdAt.slice(1, 9)}
                    {element.createdAt.slice(11, 16)}
                  </td>
                  <td className={styles.tableRows}>
                    {element.createdAt.slice(1, 9)}
                    {element.createdAt.slice(11, 16)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.sectionThree}>
          <div className={styles.totalTwo}>
            <h4>Subtotal: ${element.checkTotal}</h4>
            <h4>Descuento: $0.00</h4>
            <h4>Cancelado: $0.00</h4>
          </div>
          <div className={styles.totalOne}>
            <h4>Total de la cuenta</h4>
            <h3>${element.checkTotal}</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
