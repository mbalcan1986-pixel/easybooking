'use client';
import { useState } from 'react';

export default function DemoENForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Lead sent: ${name} - ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      
      <label>Email:</label>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      
      <button type="submit">Submit</button>
    </form>
  );
}
