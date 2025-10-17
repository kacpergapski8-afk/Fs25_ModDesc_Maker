import React, { useState } from 'react';
export default function App() {
  const [log, setLog] = useState('Witaj w FS25 Mod Helper by Hackerek_!');
  return (
    <div style={{ fontFamily: 'Segoe UI, Arial', padding: 20, background: '#0f1724', color: 'white', minHeight: '100vh' }}>
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#111827', padding: '10px 20px', borderRadius: 12, marginBottom: 20 }}>
        <img src="./assets/logo1.png" alt="Logo 1" style={{ height: 60, borderRadius: 8 }} onError={(e)=>{e.target.style.display='none'}}/>
        <h1 style={{ textAlign: 'center', flex: 1, margin: 0 }}>FS25 Mod Helper by Hackerek_</h1>
        <img src="./assets/logo2.png" alt="Logo 2" style={{ height: 60, borderRadius: 8 }} onError={(e)=>{e.target.style.display='none'}}/>
      </header>

      <main>
        <section style={{ background: '#0b1220', padding: 16, borderRadius: 10, marginBottom: 12 }}>
          <h2 style={{ marginTop: 0 }}>Szybki start</h2>
          <p>Wypełnij pola po lewej, dodaj pliki moda i wygeneruj paczkę ZIP z <code>modDesc.xml</code>.</p>
        </section>

        <section style={{ background: '#071024', padding: 12, borderRadius: 10 }}>
          <pre style={{ whiteSpace: 'pre-wrap', background: '#02111b', padding: 10, borderRadius: 8 }}>{log}</pre>
        </section>
      </main>

      <footer style={{ marginTop: 30, textAlign: 'center', color: '#9CA3AF', fontSize: '0.9em' }}>
        © 2025 Hackerek_ — FS25 Mod Helper
      </footer>
    </div>
  );
}
