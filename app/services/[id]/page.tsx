import { getBaseUrl } from "../../../utils/baseUrl";

interface Params { params: { id: string } }

async function fetchService(id: string) {
  const base = getBaseUrl();
  const res = await fetch(`${base}/api/services/${id}`, { cache: 'no-store' });
  if (!res.ok) return null;
  return res.json();
}

export default async function ServiceDetail({ params }: Params) {
  const svc = await fetchService(params.id);
  if (!svc) return <main className="max-w-2xl mx-auto p-6">Service introuvable.</main>;
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{svc.title}</h1>
      <div className="text-gray-600 mb-4">{svc.category}</div>
      <div className="font-bold mb-6">{svc.price} FCFA</div>
      <p className="text-gray-800 whitespace-pre-wrap">{svc.description}</p>
    </main>
  );
}
