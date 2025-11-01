"use client";

import { useState } from "react";

export default function InscriptionClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });
      const data = await res.json();
      if (res.ok) setMessage("Inscription réussie !");
      else setMessage(data.error || "Erreur");
    } catch {
      setMessage("Erreur réseau ou serveur...");
    }
    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto mt-14 bg-white p-8 shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-6">Inscription client / candidat</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input placeholder="Nom" value={name} onChange={e => setName(e.target.value)} className="border rounded-lg px-4 py-2" required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border rounded-lg px-4 py-2" required />
        <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} className="border rounded-lg px-4 py-2" required />
        <select value={role} onChange={e => setRole(e.target.value)} className="border rounded-lg px-4 py-2">
          <option value="client">Client</option>
          <option value="prestataire">Prestataire</option>
          <option value="recruteur">Recruteur</option>
          <option value="formateur">Formateur</option>
        </select>
        <button disabled={loading} className="bg-[#0077B6] text-white font-bold rounded-xl py-2">
          {loading ? "Création..." : "Je m'inscris"}
        </button>
      </form>
      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </div>
  );
}
