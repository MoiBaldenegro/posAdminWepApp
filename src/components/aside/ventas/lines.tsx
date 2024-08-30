import styles from './lines.module.css';
//dependencies
// icons
import line from '../../../assets/dashboard/line.png';
import redLine from '../../../assets/dashboard/redLine.png';

interface Props {
  redLinePosition: number;
}

export default function LinesVentasModule({ redLinePosition }: Props) {
  return (
    <div>
      <div className={styles.linesContainer}>
        <img src={line} className={styles.line} alt="line" />
        <img
          src={redLine}
          className={styles.redLine}
          style={
            redLinePosition === 1
              ? { marginTop: '2px' }
              : redLinePosition === 2
              ? { marginTop: '50px' }
              : redLinePosition === 3
              ? { marginTop: '95px' }
              : redLinePosition === 4
              ? { marginTop: '150px' }
              : redLinePosition === 5
              ? { marginTop: '205px' }
              : redLinePosition === 6
              ? { marginTop: '255px' }
              : redLinePosition === 7
              ? { marginTop: '305px' }
              : redLinePosition === 8
              ? { marginTop: '360px' }
              : { marginTop: '410px' }
          }
          alt="red-line"
        />
      </div>
    </div>
  );
}
