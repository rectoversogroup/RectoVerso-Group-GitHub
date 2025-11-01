import "../styles/globals/globals.css";
import Navbar from "../components/Navbar";
import { ReactNode } from "react";
import { I18nProvider } from "../utils/i18n";
import LangToggle from "../components/LangToggle";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900">
        <I18nProvider>
          <LangToggle />
          <Navbar />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
