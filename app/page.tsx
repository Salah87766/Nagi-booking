"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { messages } from "../i18n/messages";
import LanguageToggle from "../components/LanguageToggle";

export default function HomePage() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored) setLang(stored);
  }, []);

  const t = messages[lang];

  return (
    <main className="min-h-screen p-6 bg-white text-black">
      <LanguageToggle />
      <h1 className="text-4xl font-bold mb-4">Nagi Booking</h1>
      <p className="text-lg mb-6">{t.welcome}</p>
      <Link href="/book/abc123" className="text-blue-600 underline">
        {t.book_now}
      </Link>
    </main>
  );
}
