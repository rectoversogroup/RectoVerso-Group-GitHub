"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Erreur de connexion');
      } else {
        router.push('/espace-client');
      }
    } catch {
      setError('Erreur réseau');
    }
    setLoading(false);
  }

  return (
    <main className="max-w-sm mx-auto mt-16 bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-6 text-center">Connexion</h1>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <input className="border rounded px-3 py-2" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input className="border rounded px-3 py-2" type="password" placeholder="Mot de passe" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button disabled={loading} className="bg-[#0077B6] text-white font-semibold rounded-xl py-2">{loading? 'Connexion...' : 'Se connecter'}</button>
      </form>
      {error && <p className="mt-4 text-center text-red-600">{error}</p>}
    </main>
  );
}
