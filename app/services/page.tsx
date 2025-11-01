import Link from "next/link";
import { getBaseUrl } from "../../utils/baseUrl";

async function fetchServices() {
  const base = getBaseUrl();
  const res = await fetch(`${base}/api/services`, { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function ServicesPage() {
  const services = await fetchServices();
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Catalogue des services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s: any) => (
          <div key={s._id} className="border rounded-xl p-6 shadow-lg flex flex-col gap-3 bg-white">
            <h3 className="text-xl font-bold text-[#10B981]">{s.title}</h3>
            <div className="text-gray-500">{s.category}</div>
            <div className="font-bold">{s.price} FCFA</div>
            <Link className="bg-[#0077B6] text-white rounded-lg px-4 py-2 font-semibold mt-2 text-center" href={`/services/${s._id}`}>Voir</Link>
          </div>
        ))}
        {services.length === 0 && (
          <div className="col-span-full text-center text-gray-500">Aucun service disponible pour l'instant.</div>
        )}
      </div>
    </main>
  );
}
