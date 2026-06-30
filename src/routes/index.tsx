import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "@/i18n";
import { applyDocumentLang } from "@/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Triggers } from "@/components/sections/Triggers";
import { About } from "@/components/sections/About";
import { HowIWork } from "@/components/sections/HowIWork";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { AuditCTA } from "@/components/sections/AuditCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Валентин Максимов — специалист по работе с зависимостями | Израиль" },
      {
        name: "description",
        content:
          "Специалист по работе с химическими и поведенческими зависимостями. Работаю в Израиле — очно и онлайн, на русском и иврите. Без осуждения.",
      },
      {
        property: "og:title",
        content: "Валентин Максимов — специалист по работе с зависимостями",
      },
      {
        property: "og:description",
        content:
          "Работаю в Израиле с химическими и поведенческими зависимостями. Очно и онлайн, без осуждения.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://valentin-maksimov.com" },
      { property: "og:locale", content: "ru_IL" },
      { property: "og:image", content: "/valentin.jpg" },
      { property: "og:image:width", content: "600" },
      { property: "og:image:height", content: "600" },
      {
        property: "og:image:alt",
        content: "Валентин Максимов — специалист по работе с зависимостями, Израиль",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Валентин Максимов — специалист по работе с зависимостями | Израиль" },
      {
        name: "twitter:description",
        content:
          "Специалист по работе с химическими и поведенческими зависимостями. Израиль, очно и онлайн.",
      },
      { name: "twitter:image", content: "/valentin.jpg" },
    ],
  }),
  component: Home,
});

function Home() {
  const { i18n } = useTranslation();

  useEffect(() => {
    applyDocumentLang(i18n.resolvedLanguage ?? i18n.language ?? "ru");
  }, [i18n.resolvedLanguage, i18n.language]);

  return (
    <div className="bg-paper text-ink min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Triggers />
        <AuditCTA />
        <About />
        <HowIWork />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
