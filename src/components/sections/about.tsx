"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#EFF3FF]">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-start"
        >
          <div className="w-[280px] h-[340px] rounded-lg overflow-hidden mx-auto md:mx-0">
            <img
              src="https://static.tildacdn.com/tild6263-3962-4439-a336-633037373331/Screenshot_2026-05-1.png"
              alt="Вячеслав Староверов"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[0.6875rem] uppercase tracking-[0.15em] text-[#8C8478] font-medium mb-3">
              Обо мне
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-[2.5rem] leading-tight tracking-[-0.015em] mb-2">
              Вячеслав Староверов
            </h2>
            <p className="text-base text-[#8C8478] leading-relaxed mb-6">
              коуч-консультант,<br />
              ведущий стратегических сессий,<br />
              корпоративный антрополог
            </p>
            <p className="text-base text-[#8C8478] leading-relaxed mb-4">
              Я сосредотачиваюсь на формировании чёткого стратегического видения, слаженной командной работы и эффективного развития лидерских качеств для достижения важных целей.
            </p>
            <p className="text-base text-[#8C8478] leading-relaxed">
              Мой подход — не «лучшие практики», а понимание реальных правил игры. Смотрю, как принимаются решения, где теряются энергия и информация, какие негласные правила управляют поведением. Потом пересобираю систему — так, чтобы изменения держались без ручного управления.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}