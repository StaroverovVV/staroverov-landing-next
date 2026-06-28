"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        <div className="text-center mb-16">
          <p className="text-[0.6875rem] uppercase tracking-[0.15em] text-[#8C8478] font-medium mb-4">
            Следующий шаг
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[2rem] md:text-[2.5rem] leading-tight tracking-[-0.01em] mb-5">
            Оставьте заявку
          </h2>
          <p className="text-[#8C8478] text-base leading-relaxed max-w-[560px] mx-auto">
            Заполните форму или свяжитесь напрямую, чтобы начать работу. Готов помочь уже сегодня!
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[640px] mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Имя"
              className="w-full px-4 py-3.5 border border-[#262626] rounded-lg bg-transparent text-base outline-none focus:border-[#38141B] transition-colors"
              autoComplete="name"
            />
            <input
              type="email"
              placeholder="Электронная почта"
              required
              className="w-full px-4 py-3.5 border border-[#262626] rounded-lg bg-transparent text-base outline-none focus:border-[#38141B] transition-colors"
              autoComplete="email"
            />
          </div>
          <textarea
            placeholder="Комментарий"
            rows={3}
            className="w-full px-4 py-3.5 border border-[#262626] rounded-lg bg-transparent text-base outline-none focus:border-[#38141B] transition-colors resize-y mb-6"
          />
          <button
            type="submit"
            className="w-full md:w-auto px-10 py-3.5 rounded-lg bg-[#FFA96B] text-[#262626] font-medium text-base hover:bg-[#FF934F] transition-colors"
          >
            Отправить заявку
          </button>
        </motion.form>
      </div>
    </section>
  );
}