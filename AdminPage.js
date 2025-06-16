import React, { useState, useEffect } from 'react';
import { AdminPanel } from './AdminPanel';

export default function AdminPage() {
  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('radiance_admin') === 'true');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch('https://radiance-backend-production.up.railway.app/api/users');
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    if (isAdmin) fetchUsers();
  }, [isAdmin]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple password check (replace with real auth in production)
    if (password === 'radiance2025') {
      localStorage.setItem('radiance_admin', 'true');
      setIsAdmin(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  if (!isAdmin) {
    return (
      <div className="admin-login-page" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#18181c' }}>
        <form onSubmit={handleLogin} style={{ background: '#23232b', padding: 32, borderRadius: 12, boxShadow: '0 2px 16px #000a', color: '#ffd700', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h2 style={{ color: '#ffd700', marginBottom: 12 }}>Admin Login</h2>
          <input type="password" placeholder="Admin password" value={password} onChange={e => setPassword(e.target.value)} style={{ padding: 8, borderRadius: 6, border: '1px solid #333', background: '#18181c', color: '#ffd700' }} />
          <button type="submit" style={{ background: '#ffd700', color: '#23232b', border: 'none', borderRadius: 6, padding: '8px 0', fontWeight: 'bold', cursor: 'pointer' }}>Login</button>
          {error && <div style={{ color: '#ff4d4d', marginTop: 8 }}>{error}</div>}
        </form>
      </div>
    );
  }

  return <AdminPanel users={users} setUsers={setUsers} refreshUsers={fetchUsers} onlyAdminPage isAdmin={isAdmin} />;
}
