'use client';
import { useState } from 'react';

export default function DemoROForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Lead trimis: ${name} - ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nume:</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      
      <label>Email:</label>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      
      <button type="submit">Trimite</button>
    </form>
  );
}
