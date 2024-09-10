import { useEffect } from 'react';
import styles from './operatingClousure.module.css';
import { Processing } from './types';
import ReturnButton from '@/components/customElements/returnButton.tsx/returnButton';
interface Props {
  onClose: any;
  processing?: string;
  period: any;
}
export default function OperatingClousureModal({
  onClose,
  processing,
  period,
}: Props) {
  const formarDate = new Date(period.createdAt).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  useEffect(() => {
    console.log(period);
  }, [period]);
  return (
    <main
      className={
        processing === Processing.CONFIRM_PROCESSING
          ? styles.screen
          : styles.hidden
      }
    >
      <header>
        <div>
          <ReturnButton
            onClose={() => {
              onClose(Processing.INITIAL);
            }}
          />
          <span>Detalles del periodo de {formarDate}</span>
        </div>
        <button>Aprobar cierre operativo</button>
      </header>
    </main>
  );
}
