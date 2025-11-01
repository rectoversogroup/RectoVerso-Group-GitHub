"use client";
import { useI18n } from "../utils/i18n";

export default function LangToggle() {
  const { lang, setLang } = useI18n();
  return (
    <div className="text-sm text-gray-600 flex gap-2 items-center px-6 py-2">
      <button onClick={() => setLang('fr')} className={lang==='fr' ? 'font-bold text-[#0077B6]' : ''}>FR</button>
      <span>/</span>
      <button onClick={() => setLang('en')} className={lang==='en' ? 'font-bold text-[#0077B6]' : ''}>EN</button>
    </div>
  );
}
