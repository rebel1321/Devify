import { useState } from 'react';
import PaymentForm from './components/PaymentForm';
import PaymentMethodCard from './components/PaymentMethodCard';
import SavedMethods from './components/SavedMethods';
import ThemeToggle from './components/ThemeToggle';
import styles from './styles/App.module.css';
import type { PaymentMethod } from './types';

const methods: PaymentMethod[] = [
  { name: 'Credit Card', logo: '/logos/credit-card.png' },
  { name: 'PayPal', logo: '/logos/paypal.png' },
  { name: 'Google Pay', logo: '/logos/google-pay.png' },
  { name: 'Apple Pay', logo: '/logos/apple-pay.png' },
];

function App() {
  const [selected, setSelected] = useState<PaymentMethod | null>(null);
  const [saved, setSaved] = useState<PaymentMethod[]>([]);
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? styles.dark : styles.app}>
      <ThemeToggle dark={dark} setDark={setDark} />
      <h1>Select Payment Method</h1>
      <div className={styles.methodGrid}>
        {methods.map((method) => (
          <PaymentMethodCard
            key={method.name}
            method={method}
            selected={selected}
            onSelect={() => setSelected(method)}
          />
        ))}
      </div>
      {selected && <PaymentForm
  method={selected}
  onSave={(method) => setSaved((prev) => [...prev, method])}
/>}
      {saved.length > 0 && <SavedMethods methods={saved} onSelect={setSelected} />}
    </div>
  );
}

export default App;
