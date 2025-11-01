"use client";
import { useEffect, useRef } from 'react';
import { useI18n } from '../utils/i18n';

export default function AudioRead({ text }: { text: string }) {
  const { lang } = useI18n();
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (utterRef.current) window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = lang === 'fr' ? 'fr-FR' : 'en-US';
    utterRef.current = u;
    return () => { window.speechSynthesis.cancel(); };
  }, [text, lang]);

  function speak() { if (utterRef.current) window.speechSynthesis.speak(utterRef.current); }
  function stop() { window.speechSynthesis.cancel(); }

  return (
    <div className="flex gap-2">
      <button onClick={speak} className="bg-[#10B981] text-white rounded px-3 py-1 text-sm">🔊 Lire</button>
      <button onClick={stop} className="bg-gray-200 rounded px-3 py-1 text-sm">⏹ Arrêter</button>
    </div>
  );
}
