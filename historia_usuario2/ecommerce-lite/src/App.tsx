import React, { useState } from 'react';
import { authenticate } from './utils/auth';
import { UserStore } from './utils/UserStore';

const store = new UserStore();
console.log('LIST:', store.list());
console.log('FIND JuanP:', store.findByName('JuanP'));

store.create({
  id: 999,
  username: 'TestUser',
  password: '1234',
  fullName: 'Test User',
  email: 'test@test.com',
  isActive: true,
  role: 'admin',
  address: 'Test',
  createdAt: new Date(),
});

console.log('AFTER CREATE:', store.list());

store.update(999, { email: 'test2@test.com' });
console.log('AFTER UPDATE:', store.findByName('TestUser'));

store.remove(999);
console.log('AFTER DELETE:', store.list());

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const user = authenticate(username, password);

    if (user) {
      setMessage(`Login correcto: ${user.fullName}`);
    } else {
      setMessage('Credenciales incorrectas');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h1 style={styles.title}>ABRIR LA CONSOLA PARA VER EL CRUD</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Usuario
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              placeholder="JuanP"
            />
          </label>
          <label style={styles.label}>
            Contraseña
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="1234"
            />
          </label>
          <button type="submit" style={styles.button}>
            Iniciar sesión
          </button>
        </form>
        {message && <div style={styles.message}>{message}</div>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
  } as React.CSSProperties,
  box: {
    width: '320px',
    padding: '24px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 12px 30px rgba(0,0,0,0.08)',
    textAlign: 'center',
  } as React.CSSProperties,
  title: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#20232a',
  } as React.CSSProperties,
  form: {
    display: 'grid',
    gap: '12px',
  } as React.CSSProperties,
  label: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    fontSize: '14px',
    color: '#333',
  } as React.CSSProperties,
  input: {
    marginTop: '6px',
    padding: '10px 12px',
    borderRadius: '8px',
    border: '1px solid #d1d5db',
    fontSize: '14px',
  } as React.CSSProperties,
  button: {
    marginTop: '10px',
    padding: '10px 14px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#2563eb',
    color: '#fff',
    fontSize: '15px',
    cursor: 'pointer',
  } as React.CSSProperties,
  message: {
    marginTop: '16px',
    color: '#111827',
    fontWeight: 500,
  } as React.CSSProperties,
};

export default App;