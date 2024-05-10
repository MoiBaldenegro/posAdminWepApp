import { useState } from 'react';
import { INITIAL_STATE, adminReports } from '../libs';
import styles from './layout.module.css';
import { CUSTOM, PRE_SET } from './lib';
import { DOWNLOAD_REPORTS } from '../../../../lib/modals.lib';
import { useModal } from '../../../../hooks/useModals';
import DownloadReport from '../dowload/downloadReport';

interface Props {
  back: (arg: string) => void;
}

export default function AdminReports({ back }: Props) {
  const [option, setOption] = useState(PRE_SET);
  const dowloadReport = useModal(DOWNLOAD_REPORTS);

  return (
    <div className={styles.container}>
      <div>
        <button
          onClick={() => {
            setOption(PRE_SET);
          }}
          style={
            option === PRE_SET
              ? {
                  background: 'rgba(249, 249, 249, 0.15)',
                  borderRadius: '16px 16px 0px 0px',
                }
              : {}
          }
        >
          Predeterminados
        </button>
        <button
          onClick={() => {
            setOption(CUSTOM);
          }}
          style={
            option === CUSTOM
              ? {
                  background: 'rgba(249, 249, 249, 0.15)',
                  borderRadius: '16px 16px 0px 0px',
                }
              : {}
          }
        >
          Personalizados
        </button>
      </div>
      {option === PRE_SET ? (
        <div
          style={
            option === PRE_SET ? { borderRadius: '0px 16px 16px 16px' } : {}
          }
        >
          {adminReports.map((element) => (
            <div onClick={dowloadReport.openModal}>
              <div>
                <img src={element.icon} alt="icon" />
              </div>
              <h4>{element.tittle}</h4>
            </div>
          ))}
        </div>
      ) : (
        <div>Customizables</div>
      )}
      {dowloadReport.isOpen && dowloadReport.modalName === DOWNLOAD_REPORTS ? (
        <DownloadReport
          isOpen={dowloadReport.isOpen}
          onClose={dowloadReport.closeModal}
        >
          Filtros
        </DownloadReport>
      ) : null}
    </div>
  );
}
