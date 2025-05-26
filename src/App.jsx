// src/App.jsx
import React, { useEffect, useState } from 'react';
import { usePGlite } from '@electric-sql/pglite-react';

function App() {
  const db = usePGlite();
  const [patients, setPatients] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    const initDb = async () => {
      await db.exec(`
        CREATE TABLE IF NOT EXISTS patients (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          age INTEGER
        );
      `);
  
      const result = await db.query('SELECT * FROM patients;');
      const rows = result.rows.map((r) =>
        Object.fromEntries(result.fields.map((f, i) => [f, r[i]]))
      );
      setPatients(rows);
    };
    initDb();
  }, [db]);
  
  // const addPatient = async (e) => {
  //   e.preventDefault();
  //   if (!name || !age) return;
  //   await db.query('INSERT INTO patients (name, age) VALUES (?, ?);', [name, age]);
  //   const result = await db.query('SELECT * FROM patients;');
  //   setPatients(result.rows);
  //   setName('');
  //   setAge('');
  // };

  const addPatient = async (e) => {
    e.preventDefault();
    if (!name || !age) return;
  
    // INSERT using db.exec (not db.query)
    await db.exec({
      sql: 'INSERT INTO patients (name, age) VALUES (?, ?);',
      args: [name, age],
    });
  
    // Fetch updated data
    const result = await db.query('SELECT * FROM patients;');
    const rows = result.rows.map((r) =>
      Object.fromEntries(result.fields.map((f, i) => [f, r[i]]))
    );
    console.log('After insert:', rows);
    setPatients(rows);
  
    // Clear input
    setName('');
    setAge('');
  };
  
  

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Patient Registration</h1>
      <form onSubmit={addPatient}>
        <input
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={age}
          type="number"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Add Patient</button>
      </form>
      <h2>Registered Patients</h2>
      <ul>
        {patients.map((p) => (
          <li key={p.id}>
            {p.name} - {p.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
