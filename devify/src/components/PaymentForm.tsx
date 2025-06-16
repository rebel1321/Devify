import { useState } from 'react';
import styles from '../styles/Form.module.css';
import type { PaymentMethod } from '../types';

interface Props {
  method: PaymentMethod;
  onSave: (method: PaymentMethod) => void;
}

export default function PaymentForm({ method, onSave }: Props) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!input.trim()) {
      return setError('This field is required.');
    }

    if (method.name === 'Credit Card' && input.length < 12) {
      return setError('Card number must be at least 12 digits.');
    }

    alert(`${method.name} info submitted: ${input}`);
    onSave(method);
    setInput('');
    setError('');
  };

  const label =
    method.name === 'Credit Card' ? 'Card Number' :
    method.name === 'PayPal' ? 'PayPal Email' :
    'Account Info';

  return (
    <div className={styles.form}>
      <label>{label}</label>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label={label}
      />
      {error && <p className={styles.error}>{error}</p>}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
