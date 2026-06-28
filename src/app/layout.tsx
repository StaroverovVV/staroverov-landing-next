import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Вячеслав Староверов — стратегический консультант для собственников и команд",
  description: "Помогаю собственникам, руководителям и командам решать сложные управленческие ситуации в стратегии, лидерстве и совместной работе. Коуч-консультант, корпоративный антрополог.",
  openGraph: {
    title: "Вячеслав Староверов — стратегический консультант",
    description: "Создаем ясность. Собираем стратегии. Усиливаем команды.",
    url: "https://staroverov-consulting.ru",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}