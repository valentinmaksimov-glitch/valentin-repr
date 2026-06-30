import { useTranslation } from "react-i18next";

type Step = { title: string; desc: string };

const WHATSAPP_URL = "https://wa.me/972506096289";

export function HowIWork() {
  const { t } = useTranslation();
  const steps = t("how.steps", { returnObjects: true }) as Step[];

  return (
    <section id="how" className="py-28 px-6 border-t border-border">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-light tracking-wide text-ink mb-16 text-center">
          {t("how.heading")}
        </h2>
        <div className="grid md:grid-cols-3 gap-12 md:gap-10">
          {steps.map((s, i) => (
            <div key={i} className="text-start">
              <p className="text-xs tracking-[0.3em] text-accent mb-4">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-xl font-light tracking-wide text-ink mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-muted font-light leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div id="booking" className="mt-24 pt-16 border-t border-border">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-ink mb-4 text-center">
              {t("how.booking_heading")}
            </h2>
            <p className="text-base text-muted font-light leading-relaxed mb-10 text-center">
              {t("how.booking_subtitle")}
            </p>

            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs tracking-widest uppercase text-muted mb-2">
                  {t("how.form_name")}
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-3 bg-transparent border border-border rounded-sm text-ink placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs tracking-widest uppercase text-muted mb-2">
                  {t("how.form_phone")}
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full px-4 py-3 bg-transparent border border-border rounded-sm text-ink placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs tracking-widest uppercase text-muted mb-2">
                  {t("how.form_message")}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-transparent border border-border rounded-sm text-ink placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-accent text-paper py-4 text-sm tracking-[0.18em] uppercase font-normal rounded-sm hover:bg-accent-hover transition-all duration-500 min-h-[44px] text-center"
              >
                {t("how.form_whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
