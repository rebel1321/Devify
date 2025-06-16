import styles from '../styles/Card.module.css';
import type { PaymentMethod } from '../types';

interface Props {
  method: PaymentMethod;
  selected: PaymentMethod | null;
  onSelect: () => void;
}

export default function PaymentMethodCard({ method, selected, onSelect }: Props) {
  return (
    <div
      className={`${styles.card} ${selected?.name === method.name ? styles.selected : ''}`}
      onClick={onSelect}
      role="button"
      aria-pressed={selected?.name === method.name}
      tabIndex={0}
    >
      <img src={method.logo} alt={`${method.name} logo`} />
      <span>{method.name}</span>
    </div>
  );
}
