"use client";
import AudioRead from "../../components/AudioRead";
import { useI18n } from "../../utils/i18n";

const DUMMY_BLOGS = [
  { title: 'Solaire: Nouveaux tarifs', content: 'Découvrez les nouveaux tarifs...', id: 1 },
  { title: 'Numérique: Offres de stage', content: 'Postulez à de nouvelles offres...', id: 2 },
  { title: 'Agriculture: Marché 2025', content: 'Le marché agricole évolue...', id: 3 },
];

export default function BlogPage() {
  const { t } = useI18n();
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">{t('Blog / Actualités', 'Blog / News')}</h1>
      <div className="flex flex-col gap-8">
        {DUMMY_BLOGS.map(article => (
          <div key={article.id} className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold text-[#0077B6] mb-2">{article.title}</h2>
              <AudioRead text={`${article.title}. ${article.content}`} />
            </div>
            <p className="text-gray-800 mt-3">{article.content}</p>
            <div className="mt-2 text-xs text-gray-500">{t('Version bilingue — Pub/local à venir', 'Bilingual — Local ads coming soon')}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
