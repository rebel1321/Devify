interface Props {
  dark: boolean;
  setDark: (value: boolean) => void;
}

export default function ThemeToggle({ dark, setDark }: Props) {
  return (
    <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
      <button
        onClick={() => setDark(!dark)}
        style={{
          padding: '0.4rem 1rem',
          backgroundColor: dark ? '#222' : '#ccc',
          color: dark ? '#fff' : '#000',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
      >
        Toggle {dark ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}
