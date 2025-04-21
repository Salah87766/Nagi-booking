'use client';
import { useState, useEffect } from "react";

export default function LanguageToggle() {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <button onClick={() => setLang(lang === 'en' ? 'pt' : 'en')}>
      {lang === 'en' ? 'Português' : 'English'}
    </button>
  )
}
