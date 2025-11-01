const DUMMY_FORMATIONS = [
  { title: "Formation énergie solaire", domain: "Solaire", cost: 12000, id: '1' },
  { title: "Initiation HTML/CSS", domain: "Numérique", cost: 0, id: '2' },
  { title: "Agriculture durable", domain: "Agricole", cost: 8000, id: '3' },
];

export default function FormationsPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Formations</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DUMMY_FORMATIONS.map((f) => (
          <div key={f.id} className="border rounded-xl p-6 shadow-lg flex flex-col gap-3 bg-white">
            <h3 className="text-xl font-bold text-[#0077B6]">{f.title}</h3>
            <div className="text-gray-600">{f.domain}</div>
            <div>{f.cost ? (<span className="font-bold">{f.cost} FCFA</span>) : (<span className="text-green-600">Gratuite</span>)} </div>
            <button className="bg-[#10B981] text-white rounded-lg px-4 py-2 font-semibold mt-2">Détail</button>
          </div>
        ))}
      </div>
    </main>
  );
}
