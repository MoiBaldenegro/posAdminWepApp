import styles from './download.module.css';
import downloadIcon from '../../../../assets/reportsMenu/downloadIcon.svg';
import arrow from '../../../../assets/public/arrow.svg';
import { useState } from 'react';
interface Props {
  isOpen: any;
  onClose: any;
  children: any;
}
export default function DownloadReport({ isOpen, onClose, children }: Props) {
  // customs selects
  const [selectedSellType, setSelectedSellType] = useState(false);
  const [selectedCancelFor, setSelectedCancelFor] = useState(false);
  const [selectedCancelBy, setSelectedCancelBy] = useState(false);
  // states
  const [toggleStatus, setToggleStatus] = useState(false);
  const [form, setForm] = useState();
  return (
    <main className={styles.screen}>
      <div>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <h3>{children}</h3>
        <div>
          <div>
            <div>
              <h4>Fecha inicial</h4>
              <div>
                <input type="date" />
              </div>
            </div>
            <div>
              <h4>Fecha final</h4>
              <div>
                <input type="date" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h4>Hora inicial</h4>
              <div>
                <input type="time" />
              </div>
            </div>
            <div>
              <h4>Hora final</h4>
              <div>
                <input type="time" />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <h4>Tipo de venta</h4>
                <div>
                  <div className={styles.containerInput}>
                    <div className={styles.categoriesSelect}>
                      <div
                        className={styles.customSelect}
                        onClick={() => {
                          setSelectedSellType(!selectedSellType);
                        }}
                      >
                        <div className={styles.selectTrigger}>
                          <span> Todos</span>
                          <img
                            src={arrow}
                            alt=""
                            className={styles.arrowSelect}
                          />
                        </div>
                        <div
                          className={
                            selectedSellType ? styles.options : styles.hidden
                          }
                        >
                          <span className={styles.option}>Option</span>
                          <span className={styles.option}>Option</span>
                          <span className={styles.option}>Optionyou</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4>Cancelado por</h4>
                <div className={styles.containerInput}>
                  <div className={styles.categoriesSelect}>
                    <div
                      className={styles.customSelect}
                      onClick={() => {
                        setSelectedCancelBy(!selectedCancelBy);
                      }}
                    >
                      <div className={styles.selectTrigger}>
                        <span>Todos </span>
                        <img
                          src={arrow}
                          alt=""
                          className={styles.arrowSelect}
                        />
                      </div>
                      <div
                        className={
                          selectedCancelBy ? styles.options : styles.hidden
                        }
                      >
                        <span className={styles.option}>Option</span>
                        <span className={styles.option}>Option</span>
                        <span className={styles.option}>Optionyou</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className={styles.containerInput}>
                  <h4>Cancelado a</h4>
                  <div className={styles.categoriesSelect}>
                    <div
                      className={styles.customSelect}
                      onClick={() => {
                        setSelectedCancelFor(!selectedCancelFor);
                      }}
                    >
                      <div className={styles.selectTrigger}>
                        <span>Todos </span>
                        <img
                          src={arrow}
                          alt=""
                          className={styles.arrowSelect}
                        />
                      </div>
                      <div
                        className={
                          selectedCancelFor ? styles.options : styles.hidden
                        }
                      >
                        <span className={styles.option}>Option</span>
                        <span className={styles.option}>Option</span>
                        <span className={styles.option}>Optionyou</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div>
            <h4>Exportar como</h4>
            <div>
              <div>
                <input type="radio" name="export" value={'xls'} />
                <h4>PDF</h4>
              </div>
              <div>
                <input type="radio" name="export" value={'pdf'} />
                <h4>{'EXCEL (.xls)'}</h4>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button>
            <img src={downloadIcon} alt="save-icon" />
            Descargar
          </button>
        </div>
      </div>
    </main>
  );
}
