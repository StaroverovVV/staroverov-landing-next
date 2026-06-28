import React from 'react';

const links = [
  {
    title: "Личная стратегическая сессия",
    description: "Выход из операционного хаоса в ясность действий",
    url: "https://t.me/StaroverovClaw_bot", // Замени на актуальную ссылку
    highlight: true,
  },
  {
    title: "Курс 'Привычка Стратегировать'",
    description: "Внедрение системного мышления в ежедневную рутину",
    url: "https://t.me/Staroverov_coach", // Замени на ссылку курса
    highlight: false,
  },
  {
    title: "Лид-магнит: 7 признаков перехода",
    description: "Узнайте, переросли ли вы свою текущую логику управления",
    url: "https://t.me/Staroverov_coach", // Замени на ссылку
    highlight: false,
  },
  {
    title: "Мои интервью и разборы",
    description: "Глубокий анализ культурных кодов и системного лидерства",
    url: "#", // Замени на ссылку
    highlight: false,
  },
  {
    title: "Telegram-канал",
    description: "Системное лидерство и корпоративная антропология",
    url: "https://t.me/Staroverov_coach",
    highlight: false,
  },
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-12 font-sans">
      {/* Profile Header */}
      <div className="flex flex-col items-center mb-10">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-gray-700 to-gray-400 mb-4 overflow-hidden border-2 border-white/20">
          {/* Здесь будет фото профиля */}
          <div className="w-full h-full flex items-center justify-center text-2xl font-bold">СВ</div>
        </div>
        <h1 className="text-xl font-semibold text-center">Вячеслав Староверов</h1>
        <p className="text-gray-400 text-sm text-center mt-2 max-w-xs">
          Бизнес-коуч, корпоративный антрополог, стратегический фасилитатор.
        </p>
      </div>

      {/* Links Container */}
      <div className="w-full max-w-md space-y-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              block w-full p-4 rounded-2xl transition-all duration-300 text-center group
              ${link.highlight 
                ? 'bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.02]' 
                : 'bg-white/10 text-white backdrop-blur-md border border-white/10 hover:bg-white/20 hover:scale-[1.02]'
              }
            `}
          >
            <div className="text-lg">{link.title}</div>
            {link.description && (
              <div className="text-xs opacity-60 mt-1 font-normal">
                {link.description}
              </div>
            )}
          </a>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 opacity-40 text-xs">
        © {new Date().getFullYear()} Вячеслав Староверов
      </footer>
    </div>
  );
}
