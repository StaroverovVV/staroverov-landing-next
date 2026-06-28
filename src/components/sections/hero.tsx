"use client";

import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";

const heroTitle = "Создаем ясность. Собираем стратегии. Усиливаем команды.";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[700px] flex items-center overflow-hidden bg-[#1a1a1a]">
      <Spotlight className="-top-40 left-0 md:left-60" fill="#F5F2EC" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60 z-[1]" />
      <div className="relative z-[2] max-w-[1200px] mx-auto px-8 md:px-12 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.15em] text-white/50 mb-6 font-medium">
            Стратегический консультант
          </p>
        </motion.div>

        <TextGenerateEffect
          words={heroTitle}
          className="text-[2.5rem] md:text-[3.25rem] lg:text-[3.5rem] leading-[1.05] tracking-[-0.02em] text-white mb-6"
          duration={0.6}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-white/75 text-base md:text-[1.0625rem] leading-relaxed max-w-[560px] mb-10"
        >
          Инструменты и практики для собственников, руководителей и команд — как закреплять изменения, выстраивать совместную работу и договариваться о правилах игры.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#38141B] text-white text-base font-medium hover:bg-[#4A1C26] transition-colors"
          >
            Обсудить запрос
          </a>
          <a
            href="#cases"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/30 text-white text-base font-medium hover:bg-white/10 hover:border-white/60 transition-all"
          >
            Изучить кейсы
          </a>
        </motion.div>
      </div>
    </section>
  );
}