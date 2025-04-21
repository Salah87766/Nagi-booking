\"use client\";
import { useState, useEffect } from "react";

export default function LanguageToggle() {
  const [lang, setLang] = useState(\"en\");

  useEffect(() => {
    const stored = localStorage.getItem(\"lang\");
    if (stored) setLang(stored);
  }, []);

  const toggle = () => {
    const newLang = lang === \"en\" ? \"pt\" : \"en\";
    setLang(newLang);
    localStorage.setItem(\"lang\", newLang);
    location.reload();
  };

  return (
    <button onClick={toggle} className=\"text-sm underline mb-4 block\">
      Switch to {lang === \"en\" ? \"Português\" : \"English\"}
    </button>
  );
}
