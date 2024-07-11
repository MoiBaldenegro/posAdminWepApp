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
              ? { marginTop: '100px' }
              : redLinePosition === 4
              ? { marginTop: '155px' }
              : redLinePosition === 5
              ? { marginTop: '205px' }
              : redLinePosition === 6
              ? { marginTop: '255px' }
              : { marginTop: '310px' }
          }
          alt="red-line"
        />
      </div>
    </div>
  );
}
