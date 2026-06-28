"use client";

import { motion } from "framer-motion";

const pains = [
  {
    title: "Отсутствие чёткой стратегии",
    text: "Необходимость разработки и внедрения эффективной стратегии для достижения бизнес-целей.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 2L4 8v8c0 7.7 5.1 14.9 12 16 6.9-1.1 12-8.3 12-16V8L16 2z" />
        <path d="M12 16l3 3 5-5" />
      </svg>
    ),
  },
  {
    title: "Сложности в командной работе",
    text: "Конфликты и недопонимание между членами команды, мешающие достижению общих целей.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="10" cy="16" r="4" /><circle cx="22" cy="16" r="4" /><path d="M14 16h4" />
      </svg>
    ),
  },
  {
    title: "Недостаток лидерских качеств",
    text: "Трудности в развитии лидерских навыков, необходимых для управления командой.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 4v4M16 24v4M6 16h4M22 16h4" strokeLinecap="round" /><circle cx="16" cy="16" r="6" />
      </svg>
    ),
  },
  {
    title: "Неопределённость в решениях",
    text: "Сложности в принятии обоснованных решений из-за недостатка информации.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 16h6l3-8 6 16 3-8h6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Проблемы с мотивацией",
    text: "Снижение производительности и удовлетворённости сотрудников, требующее новых подходов.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 6v20M6 16h20" strokeLinecap="round" /><circle cx="16" cy="16" r="12" strokeDasharray="4 4" />
      </svg>
    ),
  },
  {
    title: "Сложности в коммуникации",
    text: "Неэффективная коммуникация внутри команды и с внешними партнёрами.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="8" y="8" width="16" height="16" rx="1" /><path d="M12 12h8M12 16h8M12 20h4" strokeLinecap="round" />
      </svg>
    ),
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Pains() {
  return (
    <section id="pains" className="py-20 md:py-28 bg-[#EFF3FF]">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[0.6875rem] uppercase tracking-[0.15em] text-[#8C8478] font-medium mb-4">
            Ситуации клиентов
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] md:text-[2.5rem] leading-tight tracking-[-0.01em] mb-5">
            С чем приходят ко мне
          </h2>
          <p className="text-[#8C8478] text-base leading-relaxed max-w-[560px] mx-auto">
            Мы поможем найти решение для каждой проблемы.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
        >
          {pains.map((pain) => (
            <motion.div key={pain.title} variants={item} className="py-2 group">
              <div className="text-[#38141B] mb-2 transition-transform group-hover:scale-110">
                {pain.icon}
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-base font-semibold mb-1">
                {pain.title}
              </h3>
              <p className="text-sm text-[#8C8478] leading-relaxed">{pain.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}