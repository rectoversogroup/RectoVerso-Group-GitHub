export default function ForumPage() {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Forum communautaire</h1>
      <div className="flex flex-col gap-6 items-center">
        <button className="bg-[#0077B6] text-white px-6 py-2 rounded-xl font-semibold mb-4">Démarrer une discussion</button>
        <section className="w-full bg-white rounded-xl p-4 shadow">
          <h3 className="font-bold text-[#10B981] mb-2">Dernières discussions</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Emploi : Vos astuces pour un bon CV au Sénégal ?</li>
            <li>Formation : Partagez vos centres subventionnés</li>
            <li>Entrepreneuriat : Astuces et pièges du premier business</li>
            <li>Solaire : Meilleur installateur à Thiès ?</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
