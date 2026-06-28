"use client";

import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const cases = [
  {
    title: "Развитие стратегии для компании X",
    text: "Собственник производственной компании услышал доклад на бизнес-конференции. Зацепила мысль: компанию нельзя перестроить, пока не увидел, как она живёт на самом деле. Начали не с компании, а с него самого — личная работа и менторинг первого лица. За несколько месяцев он увидел, как меняется качество его решений — и пригласил провести стратегическую сессию для топ-команды.",
    img: "https://static.tildacdn.com/tild3563-6637-4635-a133-643737373866/photo-1529119368496-.jpg",
    label: "Стратегия",
  },
  {
    title: "Формирование команды для проекта Y",
    text: "Оптимизация внутренних процессов, улучшение коммуникации и достижение синергии в работе.",
    img: "https://static.tildacdn.com/tild6532-3832-4539-a634-663336363334/photo-1556761175-b41.jpg",
    label: "Команда",
  },
  {
    title: "Поддержка лидерства в компании Z",
    text: "Развитие лидерских качеств, создание условий для профессионального роста и масштабирования бизнеса.",
    img: "https://static.tildacdn.com/tild6235-6466-4835-b163-336663616333/photo-1662493724051-.jpg",
    label: "Лидерство",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="py-20 md:py-28 bg-[#EFF3FF]">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[0.6875rem] uppercase tracking-[0.15em] text-[#8C8478] font-medium mb-4">
            Кейсы
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] md:text-[2.5rem] leading-tight tracking-[-0.01em] mb-5">
            Как это работает на практике
          </h2>
          <p className="text-[#8C8478] text-base leading-relaxed max-w-[560px] mx-auto">
            В каждом кейсе описаны компания, задачи и результаты работы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <CardContainer containerClassName="py-0">
                <CardBody className="bg-white rounded-[15px] overflow-hidden h-full relative group/card w-full">
                  <CardItem translateZ={40} className="w-full">
                    <div className="aspect-[5/4] overflow-hidden">
                      <img
                        src={c.img}
                        alt={c.title}
                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardItem>
                  <CardItem translateZ={20} className="p-5">
                    <span className="inline-block text-[0.6875rem] uppercase tracking-[0.1em] font-semibold text-[#38141B] mb-2">
                      {c.label}
                    </span>
                    <h3 className="font-[family-name:var(--font-playfair)] text-base font-semibold mb-2">
                      {c.title}
                    </h3>
                    <p className="text-[0.8125rem] text-[#8C8478] leading-relaxed">
                      {c.text}
                    </p>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}