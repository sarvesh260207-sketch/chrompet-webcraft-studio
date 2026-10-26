import { createFileRoute } from "@tanstack/react-router";
import contactPage from "@/assets/work-contact-page.jpg.asset.json";
import customCakes from "@/assets/work-custom-cakes.jpg.asset.json";
import bakeryHero from "@/assets/work-bakery-hero.jpg.asset.json";
import shopCards from "@/assets/work-shop-cards.jpg.asset.json";

const PHONE_DISPLAY = "6380394239";
const WHATSAPP_URL = "https://wa.me/916380394239";

const WORK = [
  {
    src: bakeryHero.url,
    alt: "Bakery website homepage built for S.V. Sweets & Bakers",
    title: "S.V. Sweets & Bakers",
    tag: "Bakery · Homepage",
  },
  {
    src: customCakes.url,
    alt: "Custom cake ordering section with step-by-step ordering",
    title: "Custom cake ordering",
    tag: "Bakery · Ordering flow",
  },
  {
    src: shopCards.url,
    alt: "Online shop product cards with prices and add-to-cart",
    title: "Online shop & catalogue",
    tag: "Shop · Product cards",
  },
  {
    src: contactPage.url,
    alt: "Contact page with Google map, opening hours and WhatsApp button",
    title: "The Cake Point · Contact",
    tag: "Bakery · Contact & map",
  },
];

const SERVICES = [
  {
    title: "Business websites",
    body: "Clean, fast websites that make any local business look professional — built to load quickly on phones, where your customers actually browse.",
  },
  {
    title: "Product catalogues",
    body: "Showcase everything you sell with photos, prices and categories, so customers can browse your full range before they even walk in.",
  },
  {
    title: "Online ordering & payments",
    body: "Let customers order ahead and pay online — order bookings, delivery slots and payment collection built right into the site.",
  },
  {
    title: "Booking & enquiry pages",
    body: "Appointment booking for clinics and enquiry forms for services, connected straight to your WhatsApp so nothing gets missed.",
  },
];

const PRICING = [
  {
    name: "Starter",
    price: "₹5,000 – ₹7,000",
    line: "A simple static website with your full catalogue.",
    features: [
      "Simple static website with a product / service catalogue",
      "Mobile-friendly, fast-loading pages",
      "WhatsApp call-to-action on every page",
      "Contact page with map & timings",
      "Basic Google search setup",
    ],
    featured: false,
  },
  {
    name: "Business",
    price: "₹7,000 – ₹9,000",
    line: "Minimal order bookings, rich graphics and a bigger catalogue.",
    features: [
      "Everything in Starter",
      "Minimal order bookings built in",
      "Richer graphics and shop-style visuals",
      "Payments collection added",
      "Larger catalogue with item showcase pages",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "₹10,000 – ₹15,000",
    line: "The complete package — full online ordering and payments.",
    features: [
      "Everything in Business",
      "Full online order booking",
      "Online payments end to end",
      "Delivery / pickup slots",
      "Ongoing support on WhatsApp",
    ],
    featured: false,
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Web Studio Chromepet — Websites for local businesses",
      },
      {
        name: "description",
        content:
          "Freelance web design studio in Chromepet, Chennai. Professional websites, catalogues and online ordering for bakeries, cake shops, dental clinics and growing businesses — under budget. WhatsApp 6380394239.",
      },
      { property: "og:title", content: "Web Studio Chromepet — Websites for local businesses" },
      {
        property: "og:description",
        content:
          "Professional websites, catalogues and online ordering for bakeries, cake shops, dental clinics and growing businesses — under budget. Based in Chromepet.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Web Studio Chromepet — Websites for local businesses",
      },
      {
        name: "twitter:description",
        content:
          "Professional websites, catalogues and online ordering for local businesses — under budget. Based in Chromepet.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Work />
        <Pricing />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-primary-foreground shadow-lg transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground font-display text-lg text-background">
            W
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg tracking-tight">Web Studio</span>
            <span className="block eyebrow text-muted-foreground">Chromepet · Chennai</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="#work" className="transition-colors hover:text-foreground">
            Our work
          </a>
          <a href="#services" className="transition-colors hover:text-foreground">
            Services
          </a>
          <a href="#pricing" className="transition-colors hover:text-foreground">
            Pricing
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-85"
        >
          <WhatsAppIcon className="h-4 w-4" />
          DM {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:pb-28 md:pt-24">
        <p className="eyebrow text-navy">Website creation studio · Chromepet</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
          Websites that make your business{" "}
          <span className="italic text-navy">look professional</span> — without the agency price.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          We are a team of freelancers who build websites the professional way — catalogues,
          online ordering and payments for bakeries, cake shops, dental clinics and every
          growing business in the city.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-soft"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp us — {PHONE_DISPLAY}
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground"
          >
            See our work
          </a>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    "Bakeries & cake shops",
    "Dental clinics",
    "Local retail shops",
    "Every growing business",
  ];
  return (
    <section className="border-y border-border bg-navy-tint">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-5 py-5">
        {items.map((item) => (
          <span key={item} className="flex items-center gap-2 text-sm font-medium text-navy">
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" aria-hidden />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow text-navy">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">{title}</h2>
      {lead ? <p className="mt-4 text-muted-foreground leading-relaxed">{lead}</p> : null}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow="What we build"
        title="Everything a growing business needs online"
        lead="From a simple catalogue to a full online store — pick only what your business is ready for."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {SERVICES.map((s) => (
          <article key={s.title} className="card-frame p-7 transition-shadow hover:shadow-md">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-tint">
              <span className="font-display text-lg text-navy">◆</span>
            </div>
            <h3 className="mt-5 font-display text-2xl tracking-tight">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="border-y border-border bg-navy-tint/60">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Our previous work"
            title="Real websites, already serving customers"
            lead="A glimpse of a complete bakery website we designed — homepage, catalogue, ordering and contact."
          />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {WORK.map((w) => (
            <figure key={w.title} className="group">
              <div className="card-frame overflow-hidden p-2 transition-shadow group-hover:shadow-lg">
                <img
                  src={w.src}
                  alt={w.alt}
                  loading="lazy"
                  className="w-full rounded-xl border border-border object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between px-1">
                <span className="font-display text-xl tracking-tight">{w.title}</span>
                <span className="eyebrow text-muted-foreground">{w.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow="Pricing roadmap"
        title="Pick your stage — upgrade whenever you're ready"
        lead="Start small and grow into more features. No hidden costs, and every package is built under budget for local businesses."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {PRICING.map((tier) => (
          <article
            key={tier.name}
            className={
              tier.featured
                ? "card-frame relative bg-navy p-8 text-primary-foreground shadow-lg lg:-translate-y-3"
                : "card-frame p-8"
            }
          >
            {tier.featured ? (
              <span className="absolute right-6 top-6 rounded-full bg-background px-3 py-1 eyebrow text-navy">
                Most popular
              </span>
            ) : null}
            <h3 className={`font-display text-3xl tracking-tight ${tier.featured ? "" : "text-navy"}`}>
              {tier.name}
            </h3>
            <p className={`mt-1 text-sm ${tier.featured ? "text-primary-foreground/75" : "text-muted-foreground"}`}>
              {tier.line}
            </p>
            <p className="mt-6 font-display text-3xl tracking-tight">{tier.price}</p>
            <ul className={`mt-7 space-y-3 text-sm ${tier.featured ? "" : "text-muted-foreground"}`}>
              {tier.features.map((f) => (
                <li key={f} className="flex gap-2.5">
                  <span
                    className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                      tier.featured ? "bg-primary-foreground text-navy" : "bg-navy text-primary-foreground"
                    }`}
                    aria-hidden
                  >
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className={
                tier.featured
                  ? "mt-8 flex w-full items-center justify-center rounded-full bg-primary-foreground px-5 py-3 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
                  : "mt-8 flex w-full items-center justify-center rounded-full border border-foreground px-5 py-3 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
              }
            >
              Enquire on WhatsApp
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    {
      title: "Freelancers, agency quality",
      body: "You get professional design and clean, fast websites — without paying agency overheads.",
    },
    {
      title: "Built under budget",
      body: "Clear package pricing from ₹5,000. Grow from a simple catalogue to full online ordering at your own pace.",
    },
    {
      title: "Made in Chromepet",
      body: "We're local. Sit with us, show us your shop, and get a website that actually fits how you do business.",
    },
    {
      title: "Straight to WhatsApp",
      body: "One number, direct to us. No ticket systems, no waiting — just message and we start.",
    },
  ];
  return (
    <section className="border-y border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <p className="eyebrow text-background/60">Why businesses choose us</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-tight md:text-5xl">
          Big-studio quality, small-studio pricing.
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <div key={p.title}>
              <span className="font-display text-3xl text-background/40">0{i + 1}</span>
              <h3 className="mt-2 font-display text-xl tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-background/70">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="card-frame grid items-center gap-10 p-8 md:grid-cols-2 md:p-14">
        <div>
          <p className="eyebrow text-navy">Get started today</p>
          <h2 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
            DM us and let's build your website.
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Send us a message with your business name and what you'd like online — we'll reply
            with ideas and a quote the same day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-soft"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp {PHONE_DISPLAY}
            </a>
            <a
              href="tel:+916380394239"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground"
            >
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
        <dl className="space-y-5 border-border md:border-l md:pl-10">
          <div>
            <dt className="eyebrow text-muted-foreground">Phone / WhatsApp</dt>
            <dd className="mt-1 font-display text-2xl tracking-tight">+91 63803 94239</dd>
          </div>
          <div>
            <dt className="eyebrow text-muted-foreground">Location</dt>
            <dd className="mt-1 font-display text-2xl tracking-tight">Chromepet, Chennai</dd>
          </div>
          <div>
            <dt className="eyebrow text-muted-foreground">Best time to reach</dt>
            <dd className="mt-1 text-sm text-muted-foreground">
              We reply on WhatsApp throughout the day.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8">
        <p className="font-display text-lg tracking-tight">Web Studio · Chromepet</p>
        <p className="text-sm text-background/70">Websites for growing businesses · WhatsApp {PHONE_DISPLAY}</p>
      </div>
    </footer>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.02c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.07 8.07 0 0 1-1.26-4.34c0-4.47 3.64-8.1 8.11-8.1 4.47 0 8.1 3.63 8.1 8.1 0 4.47-3.63 8.2-7.96 8.2Zm4.45-6.07c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.38.11-.5.11-.11.24-.28.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.3-.22.24-.85.83-.85 2.03s.87 2.35.99 2.51c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}
