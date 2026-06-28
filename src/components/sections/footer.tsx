export default function Footer() {
  const navLinks = [
    { href: "#hero", label: "Главная" },
    { href: "https://staroverov-consulting.ru/personal", label: "Личная работа" },
    { href: "/strategy", label: "Стратсессии" },
    { href: "#levels", label: "HR Консалтинг" },
    { href: "#cases", label: "Кейсы" },
  ];

  return (
    <footer className="bg-[#111111] py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-8">
          <div>
            <div className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white mb-3">
              Вячеслав Староверов
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Коуч-консультант. Стратегические сессии. Корпоративная антропология.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-start">
            <a
              href="https://t.me/Staroverov_coach"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Telegram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161l-1.97 9.293c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.374-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.94z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}