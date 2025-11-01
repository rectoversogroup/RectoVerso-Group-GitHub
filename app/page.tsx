"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero section */}
      <section className="flex flex-col items-center justify-center py-24 px-4 bg-gradient-to-b from-[#0077B6] to-[#10B981] text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center drop-shadow-lg">
          Plateforme JOM<br />Emploi, Formation & Services
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-center max-w-2xl">
          Facilitez votre accès à l’emploi, trouvez une formation ou proposez vos services partout au Sénégal et en Afrique !
        </p>
        <div className="flex space-x-4">
          <a href="/trouver-service" className="rounded-xl bg-white text-[#0077B6] font-semibold px-6 py-3 shadow-md hover:bg-[#F3F4F6] transition">Trouver un service</a>
          <a href="/proposer-service" className="rounded-xl bg-[#10B981] text-white font-semibold px-6 py-3 shadow-md hover:bg-[#059669] transition">Proposer un service</a>
        </div>
      </section>
      {/* Sections (cartes, témoignages, etc.) à ajouter ensuite */}
    </main>
  );
}
