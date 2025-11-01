export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto mt-12 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact / Contact</h1>
      <form className="flex flex-col gap-4">
        <input className="border rounded-lg px-4 py-2" placeholder="Nom / Name" />
        <input className="border rounded-lg px-4 py-2" type="email" placeholder="Email" />
        <textarea className="border rounded-lg px-4 py-2" placeholder="Votre message / Your message" rows={4} />
        <button className="w-full mt-2 bg-[#0077B6] text-white py-2 rounded-xl font-semibold">Envoyer / Send</button>
      </form>
      <section className="mt-8 text-gray-700">
        <h2 className="text-xl font-semibold mb-2">Coordonnées / Address</h2>
        <ul>
          <li>Dakar, Sénégal</li>
          <li>Email : contact@jom.sn</li>
          <li>Téléphone : +221 77 123 45 67</li>
        </ul>
        <div className="mt-4 w-full h-48 bg-gray-200 flex items-center justify-center rounded">Google Maps (cliquer pour ouvrir)</div>
      </section>
    </main>
  );
}
