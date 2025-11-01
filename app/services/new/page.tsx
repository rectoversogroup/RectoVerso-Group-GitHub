"use client";
import { useState } from 'react';

export default function NewServicePage() {
  const [form, setForm] = useState({ title: '', description: '', price: '', category: 'Solaire', provider: '' });
  const [msg, setMsg] = useState('');
  function onChange(e: any) { setForm({ ...form, [e.target.name]: e.target.value }); }

  async function onSubmit(e: any) {
    e.preventDefault();
    setMsg('');
    try {
      const res = await fetch('/api/services', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, price: Number(form.price) }) });
      const data = await res.json();
      if (!res.ok) setMsg(data.error || 'Erreur'); else setMsg('Service créé (en validation)');
    } catch { setMsg('Erreur réseau'); }
  }

  return (
    <main className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Nouveau service</h1>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <input name="title" placeholder="Titre" className="border rounded px-3 py-2" value={form.title} onChange={onChange} required />
        <textarea name="description" placeholder="Description" className="border rounded px-3 py-2" value={form.description} onChange={onChange} required />
        <input name="price" type="number" placeholder="Prix (FCFA)" className="border rounded px-3 py-2" value={form.price} onChange={onChange} required />
        <select name="category" className="border rounded px-3 py-2" value={form.category} onChange={onChange}>
          <option>Solaire</option><option>Numérique</option><option>Agricole</option>
        </select>
        <input name="provider" placeholder="ID Prestataire (User)" className="border rounded px-3 py-2" value={form.provider} onChange={onChange} required />
        <button className="bg-[#10B981] text-white rounded-xl py-2 font-semibold">Créer</button>
      </form>
      {msg && <p className="mt-4 text-center">{msg}</p>}
    </main>
  );
}
