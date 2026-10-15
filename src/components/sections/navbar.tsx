"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#hero", label: "Главная" },
  { href: "https://staroverov-consulting.ru/personal", label: "Личная работа" },
  { href: "/strategy", label: "Стратсессии" },
  { href: "#levels", label: "HR Консалтинг" },
  { href: "#cases", label: "Кейсы" },
  { href: "#", label: "Блог" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#D4CFC6]/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 h-[60px] flex items-center justify-between">
        <a href="/" className="font-[family-name:var(--font-playfair)] text-base font-bold tracking-tight">
          Вячеслав Староверов
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.8125rem] font-medium text-[#6B6B6B] hover:text-[#262626] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[0.8125rem] font-medium bg-[#38141B] text-white px-5 py-2 rounded-full hover:bg-[#4A1C26] transition-colors"
          >
            Обсудить запрос
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[3px] p-2"
          aria-label="Меню"
        >
          <span className={`block w-[22px] h-[2px] bg-[#262626] transition-all ${open ? "rotate-45 translate-y-[5px]" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-[#262626] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-[#262626] transition-all ${open ? "-rotate-45 -translate-y-[5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#D4CFC6]/50 px-8 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-[#262626]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-base font-medium bg-[#38141B] text-white px-6 py-3 rounded-full text-center hover:bg-[#4A1C26] transition-colors"
          >
            Обсудить запрос
          </a>
        </div>
      )}
    </nav>
  );
}