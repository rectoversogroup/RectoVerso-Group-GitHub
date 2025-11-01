import Link from "next/link";

const DUMMY_JOBS = [
  { title: "Technicien solaire", location: "Dakar", salary: 250000, id: '1' },
  { title: "Développeur React/Next.js", location: "Thiès", salary: 350000, id: '2' },
];

export default function EmploisPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Offres d'emploi</h1>
      <div className="flex flex-col gap-6">
        {DUMMY_JOBS.map((job) => (
          <div key={job.id} className="border rounded-xl p-6 shadow bg-white flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#0077B6]">{job.title}</h3>
              <div className="text-gray-500">{job.location}</div>
            </div>
            <div className="font-bold mb-2 md:mb-0">{job.salary} FCFA/mois</div>
            <Link className="bg-[#10B981] text-white rounded-lg px-4 py-2 font-semibold text-center" href={`/emplois/${job.id}`}>Voir</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
