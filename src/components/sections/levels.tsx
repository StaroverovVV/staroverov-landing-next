"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const levels = [
  {
    label: "КОМПАНИЯ",
    title: "Достигать результатов за счёт сильной стратегии, вовлечённой команды и корпоративной культуры",
    items: [
      "диагностика и настройка HR-процессов. HR-консалтинг",
      "Проведение стратегических сессий",
      "Внедрение стратегии",
      "Поддержка трансформации корпоративной культуры",
    ],
  },
  {
    label: "КОМАНДА",
    title: "Сонастроиться, повысить скорость доверия и качество коммуникаций",
    items: [
      "Проведение командных и партнёрских сессий",
      "Развитие и масштабирование лидерских команд",
      "Обучение руководителей оперативному управлению",
    ],
  },
  {
    label: "РУКОВОДИТЕЛЬ",
    title: "Освоить компетенции вовлекающего лидерства, научиться справляться со стрессом и создавать мотивирующую среду",
    items: [
      "Создание личной стратегии первых лиц",
      "Менторинг и коучинг руководителей",
      "Развитие и масштабирование лидеров",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Levels() {
  return (
    <section id="levels" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[0.6875rem] uppercase tracking-[0.15em] text-[#8C8478] font-medium mb-4">
            Уровни работы
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] md:text-[2.5rem] leading-tight tracking-[-0.01em] mb-5">
            Чем помогаем и как усиливаем бизнес
          </h2>
          <p className="text-[#8C8478] text-base leading-relaxed max-w-[560px] mx-auto">
            Работаю с компаниями, командами и лидерами в моменты роста, изменений и внутренних развилок.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6 max-w-[800px] mx-auto"
        >
          {levels.map((level) => (
            <motion.div
              key={level.label}
              variants={item}
              className="pl-6 border-l-[3px] border-[#38141B]"
            >
              <span className="inline-block text-[0.6875rem] uppercase tracking-[0.1em] font-semibold text-[#38141B] mb-2">
                {level.label}
              </span>
              <h3 className="font-[family-name:var(--font-playfair)] text-[1.25rem] leading-snug mb-3">
                {level.title}
              </h3>
              <ul className="space-y-1">
                {level.items.map((it) => (
                  <li key={it} className="text-sm text-[#8C8478] pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[#38141B]">
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}