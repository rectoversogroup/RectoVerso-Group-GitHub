export default function EspacePrestataire() {
  return (
    <main className="max-w-2xl mx-auto mt-10 rounded-xl bg-white shadow-md p-7">
      <h1 className="text-3xl font-bold mb-6 text-center">Espace Prestataire</h1>
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Prestations en cours</h2>
        <ul className="divide-y">
          <li className="py-2 flex justify-between"><span>Installation solaire</span><span className="text-green-600 font-bold">À payer</span></li>
          <li className="py-2 flex justify-between"><span>Formation web</span><span className="text-blue-700 font-bold">Réservée</span></li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Résumé Paiement Mobile Money</h2>
        <div className="flex justify-between font-bold text-lg">
          <div>Total perçu:</div>
          <div>23 000 FCFA</div>
        </div>
        <div className="mt-1 text-red-600">1 paiement en attente</div>
      </section>
      <section className="mb-7">
        <h2 className="text-lg font-semibold mb-3">Notifications</h2>
        <div className="bg-gray-100 rounded p-3 text-gray-700">
          SMS bilingues, alerte réservation, validation JOM...
        </div>
      </section>
      <button className="bg-[#10B981] text-white py-3 w-full rounded-xl font-bold mt-2">Prendre l’abonnement premium (5000 FCFA / mois)</button>
    </main>
  );
}
