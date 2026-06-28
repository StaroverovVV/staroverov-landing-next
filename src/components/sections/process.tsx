"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Уточняем задачу",
    subtitle: "Анализ текущего состояния и определение стратегических целей.",
    text: "На первой встрече разбираем, что сейчас происходит в компании, где главный узел напряжения и какого результата вы ждёте. Сразу согласуем фокус, формат и границы работы.",
  },
  {
    num: "02",
    title: "Изучаю работу компании изнутри",
    subtitle: "Разработка плана действий и распределение ролей в команде.",
    text: "Погружаюсь в рабочую среду: встречи, интервью, наблюдение за реальной работой. Смотрю, как принимаются решения, где теряются энергия и информация и какие негласные правила управляют поведением.",
  },
  {
    num: "03",
    title: "Пересобираем систему управления",
    subtitle: "Реализация плана и координация работы команды.",
    text: "Возвращаю команде точную картину, включая то, что обычно остаётся за кадром. Вместе уточняем стратегию, роли, ответственность и правила взаимодействия под задачу роста.",
  },
  {
    num: "04",
    title: "Закрепляем изменения в практике",
    text: "Переводим договорённости в управленческие ритмы, решения и новые способы работы. Сопровождаю первые шаги, чтобы изменения держались без постоянного ручного управления.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-[#EFF3FF]">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[0.6875rem] uppercase tracking-[0.15em] text-[#8C8478] font-medium mb-4">
            Процесс
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] md:text-[2.5rem] leading-tight tracking-[-0.01em] mb-5">
            Как мы будем работать
          </h2>
          <p className="text-[#8C8478] text-base leading-relaxed max-w-[560px] mx-auto">
            От первой встречи до устойчивых изменений — четыре шага.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-[15px] p-7 relative"
            >
              <div className="w-9 h-9 rounded-full border-2 border-[#262626] flex items-center justify-center mb-4">
                <span className="text-sm font-semibold">{step.num}</span>
              </div>
              <h3 className="font-semibold text-base mb-1">{step.title}</h3>
              {step.subtitle && (
                <p className="text-sm text-[#8C8478] italic mb-3">{step.subtitle}</p>
              )}
              <p className="text-[0.8125rem] text-[#8C8478] leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}