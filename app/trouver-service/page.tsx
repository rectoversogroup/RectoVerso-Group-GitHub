"use client";
import { useState } from 'react';

export default function TrouverServicePage() {
  const [q, setQ] = useState('');
  const sectors = ['Solaire', 'Numérique', 'Agricole'];
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Trouver un service</h1>
      <div className="flex gap-3 mb-6">
        <input className="flex-1 border rounded px-3 py-2" placeholder="Rechercher (ex: installation solaire)" value={q} onChange={e=>setQ(e.target.value)} />
        <button className="bg-[#0077B6] text-white px-4 rounded">Rechercher</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sectors.map(s => (
          <div key={s} className="border rounded-xl p-5 bg-white shadow">
            <h3 className="text-lg font-bold text-[#10B981]">{s}</h3>
            <p className="text-gray-600">Services populaires dans le secteur {s}.</p>
            <button className="mt-3 text-sm bg-gray-100 rounded px-3 py-1">Voir</button>
          </div>
        ))}
      </div>
    </main>
  );
}
