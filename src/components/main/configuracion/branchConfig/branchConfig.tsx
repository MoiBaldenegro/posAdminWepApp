import styles from './branchConfig.module.css';

interface Props {
  isOpen: any;
  onClose: any;
  children: any;
}

export default function BranchConfig({ isOpen, onClose, children }: Props) {
  return (
    <main className={styles.screen}>
      <div>
        <h2>{children}</h2>
      </div>
    </main>
  );
}
