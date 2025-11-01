export default function FAQPage() {
  return (
    <main className="max-w-2xl mx-auto mt-12 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">FAQ - Questions fréquentes</h1>
      <ul className="mb-8 list-disc list-inside text-gray-800">
        <li>Comment créer un compte ? / How to register?</li>
        <li>Paiement Mobile Money accepté ? / Is Mobile Money accepted?</li>
        <li>Quels secteurs d’activité ? / Which sectors?</li>
        <li>Support humain (abonnés premium) ? / Human support (premium) ?</li>
      </ul>
      <div className="bg-gray-100 rounded-lg p-4 mb-3">Chatbot d’aide bilingue (bientôt disponible)</div>
      <button className="w-full bg-[#10B981] text-white py-2 rounded-xl font-semibold">Accès Premium au support humain</button>
    </main>
  );
}
