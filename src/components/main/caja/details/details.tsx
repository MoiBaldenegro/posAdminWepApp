import styles from './details.module.css';
// Icons
import leftArrow from '../../../../assets/public/leftArrow.svg';
import pendingIcon from '../../../../assets/public/StatusIcon(pending).svg';
import dividerTwo from '../../../../assets/public/dividerTwo.svg';
import commentIcon from '../../../../assets/public/comentIcon.svg';
import eyeIcon from '../../../../assets/public/openEye.svg';
import dividerSmall from '../../../../assets/public/dividerSmall.svg';
interface Props {
  element: any;
  isOpen: any;
  onClose: any;
  children: any;
}
export default function TillDetails({
  element,
  isOpen,
  onClose,
  children,
}: Props) {
  const numeral = ['2', '2', '2'];
  return (
    <div className={styles.screen}>
      <section className={styles.modal}>
        <div className={styles.sectionFirst}>
          <img src={leftArrow} alt="left-arrow-icon" onClick={onClose} />

          <h1 className={styles.tittleHead}>
            {children} {element.createdAt.slice(1, 16)}
          </h1>
        </div>
        <div className={styles.sectionTwo}>
          <div className={styles.detailsContainer}>
            <div className={styles.detailsInOne}>
              <div className={styles.detailsHead}>General</div>
              <div className={styles.detailsContent}>
                <div className={styles.itemContainer}>
                  <h5>Cajero</h5>
                  <h5>{element.user}</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Número de caja</h5>
                  <h5>{element.device}</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Apertura</h5>
                  <h5>{element.createdAt}</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Cierre</h5>
                  <h5>{element.createdAt}</h5>
                </div>
              </div>
              <div className={styles.detailsHead}>Cajero ausente</div>
              <div className={styles.detailsContent}>
                <div className={styles.itemContainer}>
                  <h5>Cajero de apoyo</h5>
                  <h5>{element.user}</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Apertura</h5>
                  <h5>{element.createdAt}</h5>
                </div>
                <div className={styles.itemContainer}>
                  <h5>Cierre</h5>
                  <h5>{element.createdAt}</h5>
                </div>
              </div>
            </div>
            <div className={styles.detailsInTwo}>
              <div className={styles.detailsHeadTwo}>Informe de ventas</div>
              <div className={styles.detailsContentTwo}>
                <div className={styles.itemContainer}>
                  <h4>Formas de pago</h4>
                  <h4>Importe</h4>
                  <h4>Esperado</h4>
                  <h4>Diferencia</h4>
                </div>
              </div>
              <img src={dividerTwo} alt="divider-large" />
              <div className={styles.detailsContentThree}>
                <div className={styles.itemContainer}>
                  <h4>Efectivo</h4>
                  <h4>$000,000.00</h4>
                  <h4>$000,000.00</h4>
                  <h4>$000,000.00</h4>
                </div>
                <div className={styles.itemContainer}>
                  <h4>Tarjeta de débito</h4>
                  <h4>$000,000.00</h4>
                  <h4>$000,000.00</h4>
                  <h4>$000,000.00</h4>
                </div>
                <div className={styles.itemContainer}>
                  <h4>Tarjeta de crédito</h4>
                  <h4>$000,000.00</h4>
                  <h4>$000,000.00</h4>
                  <h4>$000,000.00</h4>
                </div>
                <div className={styles.itemContainer}>
                  <h4>Transferencias</h4>
                  <h4>$000,000.00</h4>
                  <h4>$000,000.00</h4>
                  <h4>$000,000.00</h4>
                </div>
                <div className={styles.itemContainer}>
                  <h4>Rappi</h4>
                  <h4>$000,000.00</h4>
                  <h4>$000,000.00</h4>
                  <h4>$000,000.00</h4>
                </div>
                <div className={styles.itemContainer}>
                  <h4>Uber Eats</h4>
                  <h4>$000,000.00</h4>
                  <h4>$000,000.00</h4>
                  <h4>$000,000.00</h4>
                </div>
                <div className={styles.itemContainer}>
                  <h4>Didi Food</h4>
                  <h4>$000,000.00</h4>
                  <h4>$000,000.00</h4>
                  <h4>$000,000.00</h4>
                </div>
              </div>
              <img src={dividerTwo} alt="divider-large" />
              <div className={styles.detailsContentTwo}>
                <div className={styles.itemContainer}>
                  <h4>Total</h4>
                  <h4>$000,000.00</h4>
                  <h4>$000,000.00</h4>
                  <h4>$000,000.00</h4>
                </div>
              </div>
            </div>
            <div className={styles.detailsInOne}>
              <div className={styles.detailsHead}>Resumen de caja</div>
              <div className={styles.resume}>
                <div className={styles.itemContainerSubtittle}>
                  <h5>Movimientos</h5>
                  <h5>Importe</h5>
                </div>
                <img src={dividerSmall} alt="divider-small" />
                <div className={styles.itemContainerSubtittle}>
                  <h4>Apertura de caja</h4>
                  <h4>$000,000.00</h4>
                </div>
                <div className={styles.itemContainerSubtittle}>
                  <h4>Ventas en efectivo</h4>
                  <h4>$000,000.00</h4>
                </div>
                <div className={styles.itemContainerSubtittle}>
                  <h4>Entradas de efectivo</h4>
                  <h4>$000,000.00</h4>
                </div>
                <div className={styles.itemContainerSubtittle}>
                  <h4>Salidas de efectivo</h4>
                  <h4>$000,000.00</h4>
                </div>
                <div className={styles.itemContainerSubtittle}>
                  <h4>Retiroa de propinas</h4>
                  <h4>$000,000.00</h4>
                </div>
                <img src={dividerSmall} alt="divider-small" />
                <div className={styles.itemContainerSubtittle}>
                  <h4>Esperado en caja</h4>
                  <h4>$000,000.00</h4>
                </div>
                <div className={styles.itemContainerSubtittle}>
                  <h4>Cierre de caja</h4>
                  <h4>$000,000.00</h4>
                </div>
                <img src={dividerSmall} alt="divider-small" />
                <div className={styles.itemContainerSubtittle}>
                  <h5>Diferencia</h5>
                  <h5>$000,000.00</h5>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.detailsFirst}>
            <h2 className={styles.tableTittle}>Entradas</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tHeadNote}>Hora</th>
                  <th className={styles.tHeadNote}>Cajero</th>
                  <th className={styles.tHeadNote}>Concepto</th>
                  <th className={styles.tHeadNote}>Importe</th>
                  <th className={styles.tHeadNote}>Método</th>
                  <th className={styles.tHeadNote}>Editar</th>
                </tr>
              </thead>
              <tbody>
                {numeral.map((item) => (
                  <tr className={styles.release}>
                    <td className={styles.tableRows}>12:00</td>
                    <td className={styles.tableRows}>{element.user}</td>
                    <td className={styles.tableRows}>Cuenta ejemplo</td>
                    <td className={styles.tableRows}>$00.00</td>
                    <td className={styles.tableRows}>Transferencia</td>
                    <td className={styles.tableRows}>boton de edicion</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.detailsFirst}>
            <h2 className={styles.tableTittle}>Salidas de efectivo</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tHeadNote}>Hora</th>
                  <th className={styles.tHeadNote}>Cajero</th>
                  <th className={styles.tHeadNote}>Concepto</th>
                  <th className={styles.tHeadNote}>Importe</th>
                </tr>
              </thead>
              <tbody>
                {numeral.map((item) => (
                  <tr className={styles.release}>
                    <td className={styles.tableRows}>12:00</td>
                    <td className={styles.tableRows}>{element.user}</td>
                    <td className={styles.tableRows}>Cuenta ejemplo</td>
                    <td className={styles.tableRows}>$00.00</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.detailsFirst}>
            <h2 className={styles.tableTittle}>Propinas</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tHeadNote}>Hora</th>
                  <th className={styles.tHeadNote}>Cajero</th>
                  <th className={styles.tHeadNote}>Concepto</th>
                  <th className={styles.tHeadNote}>Importe</th>
                </tr>
              </thead>
              <tbody>
                {numeral.map((item) => (
                  <tr className={styles.release}>
                    <td className={styles.tableRows}>12:00</td>
                    <td className={styles.tableRows}>{element.user}</td>
                    <td className={styles.tableRows}>Cuenta ejemplo</td>
                    <td className={styles.tableRows}>$00.00</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
