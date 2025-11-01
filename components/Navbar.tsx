import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md flex items-center px-6 h-16 justify-between">
      <Link href="/">
        <span className="text-[#0077B6] font-bold tracking-tight text-2xl">JOM</span>
      </Link>
      <div className="hidden md:flex gap-6 text-gray-600 font-medium">
        <Link href="/services">Services</Link>
        <Link href="/services/new">Nouveau</Link>
        <Link href="/formations">Formations</Link>
        <Link href="/emplois">Emplois</Link>
        <Link href="/forum">Forum</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="flex gap-4">
        <Link href="/login" className="rounded-xl px-4 py-2 bg-[#0077B6] text-white font-semibold hover:bg-[#005f95] transition">Connexion</Link>
        <Link href="/logout" className="rounded-xl px-4 py-2 bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition">Déconnexion</Link>
      </div>
    </nav>
  );
}
