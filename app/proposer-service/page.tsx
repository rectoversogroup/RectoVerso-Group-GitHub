"use client";
import { useState } from "react";

export default function ProposerService() {
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({ title: "", category: "Solaire", description: "", price: "" });
  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    setMessage("Service proposé, en attente de validation JOM.");
  }
  return (
    <main className="max-w-lg mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Proposer un service</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input className="border rounded px-3 py-2" name="title" value={form.title} onChange={handleChange} placeholder="Titre du service" required />
        <select className="border rounded px-3 py-2" name="category" value={form.category} onChange={handleChange}>
          <option>Solaire</option><option>Numérique</option><option>Agricole</option>
        </select>
        <textarea className="border rounded px-3 py-2" name="description" value={form.description} onChange={handleChange} placeholder="Description" required />
        <input className="border rounded px-3 py-2" name="price" value={form.price} onChange={handleChange} placeholder="Prix (FCFA)" type="number" required />
        <input type="file" multiple className="border rounded px-3 py-2" disabled />
        <button className="bg-[#0077B6] text-white font-bold rounded-xl py-3">Proposer</button>
      </form>
      {message && <div className="mt-6 text-green-600 text-center font-bold">{message}</div>}
    </main>
  );
}
