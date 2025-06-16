import type { PaymentMethod } from '../types';
import styles from '../styles/Card.module.css';

interface Props {
  methods: PaymentMethod[];
  onSelect: (method: PaymentMethod) => void;
}

export default function SavedMethods({ methods, onSelect }: Props) {
  return (
    <div>
      <h3>Saved Methods</h3>
      <div className={styles.methodGrid}>
        {methods.map((m, i) => (
          <div key={i} className={styles.card} onClick={() => onSelect(m)}>
            <img src={m.logo} alt={m.name} />
            <span>{m.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
