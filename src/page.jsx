import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  HeartPulse,
  CarFront,
  Phone,
  Mail,
  ArrowRight,
  IndianRupee,
  ExternalLink,
  Star,
  Shield,
  User,
  FileText,
  MessageCircle,
} from "lucide-react";

// —— Editable settings ——
const AGENCY_NAME = "Vinay Insurance & Policy Advisor";
const AGENT_NAME = "Vinay Kumar";
const EMAIL = "vinaykumarmaanyvar@gmail.com";
const MOBILE = "+91 79039 27019"; // display format
const MOBILE_RAW = "917903927019"; // for tel:/whatsapp links
const GOOGLE_FORM_URL = "https://forms.gle/ZFnhe1CkhXFdvBVc9";

// Minimum starting prices (indicative). Update these easily.
const PRICES = {
  health: { label: "Health Insurance", price: 299, unit: "month" },
  life: { label: "Life Insurance", price: 499, unit: "month" },
  motor: { label: "Motor Insurance", price: 1999, unit: "year" },
};

export default function VinayInsuranceSite() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <Hero />
      <TrustedBar />
      <Services />
      <Pricing />
      <WhyUs />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <QuickActions />
    </div>
  );
}

function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

function PrimaryButton({ href = "#", children, newTab = true }) {
  return (
    <motion.a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-600/30 ring-1 ring-white/10 hover:bg-indigo-500 focus:outline-none"
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </motion.a>
  );
}

function GhostButton({ href = "#", children, newTab = false }) {
  return (
    <motion.a
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-5 py-3 text-base font-semibold text-white/90 backdrop-blur hover:bg-white/10"
    >
      {children}
    </motion.a>
  );
}

function Navbar() {
  const items = [
    { text: "Services", href: "#services" },
    { text: "Pricing", href: "#pricing" },
    { text: "Why Us", href: "#why-us" },
    { text: "Process", href: "#process" },
    { text: "FAQ", href: "#faq" },
    { text: "Contact", href: "#contact" },
  ];
  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600/90 ring-1 ring-white/10">
            {/* <ShieldCheck className="h-6 w-6" /> */}
            <img src="/vite4.png" alt="" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-white/90">{AGENCY_NAME}</div>
            <div className="text-xs text-white/60">{AGENT_NAME} — IRDAI Licensed Agent</div>
          </div>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {items.map((i) => (
            <a key={i.text} href={i.href} className="text-sm text-white/70 hover:text-white">
              {i.text}
            </a>
          ))}
          <PrimaryButton href={GOOGLE_FORM_URL}>
            Get Free Quote
          </PrimaryButton>
        </nav>
        <a href={`tel:${MOBILE_RAW}`} className="md:hidden" aria-label="Call">
          <Phone className="h-6 w-6 text-white/80" />
        </a>
      </Container>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* gradient glows */}
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-600/20 blur-3xl" />
      </motion.div>
      <Container className="grid grid-cols-1 items-center gap-10 py-14 md:grid-cols-2 md:py-20">
        <div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold leading-tight md:text-5xl"
          >
            One Place for <span className="text-indigo-400">Health</span>, {""}
            <span className="text-indigo-400">Life</span> & {""}
            <span className="text-indigo-400">Motor</span> Insurance
          </motion.h1>
          <p className="mt-4 max-w-xl text-white/70">
            Compare options, get personalized advice, and secure the right cover at the right price. Transparent quotes and fast claim guidance — from a trusted local advisor.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <PrimaryButton href={GOOGLE_FORM_URL}>Start Free Quote</PrimaryButton>
            <GhostButton href={`tel:${MOBILE_RAW}`} newTab={false}>
              <Phone className="h-4 w-4" /> Call {MOBILE}
            </GhostButton>
            <GhostButton href={`mailto:${EMAIL}`}>
              <Mail className="h-4 w-4" /> Email Us
            </GhostButton>
          </div>
          <div className="mt-6 flex items-center gap-2 text-white/60">
            <Star className="h-4 w-4" />
            <span>Trusted by families and drivers across India</span>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-white/80">Instant Quote</div>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-indigo-300 hover:text-indigo-200"
              >
                Open Form <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-white/80">
              <div className="rounded-2xl border border-white/10 p-4">
                <HeartPulse className="mx-auto h-6 w-6" />
                <p className="mt-2 text-xs">Health</p>
                <p className="mt-1 text-lg font-bold flex items-center justify-center"><IndianRupee className="h-5 w-5" />{PRICES.health.price}<span className="ml-1 text-xs font-medium">/ {PRICES.health.unit}</span></p>
              </div>
              <div className="rounded-2xl border border-white/10 p-4">
                <Shield className="mx-auto h-6 w-6" />
                <p className="mt-2 text-xs">Life</p>
                <p className="mt-1 text-lg font-bold flex items-center justify-center"><IndianRupee className="h-5 w-5" />{PRICES.life.price}<span className="ml-1 text-xs font-medium">/ {PRICES.life.unit}</span></p>
              </div>
              <div className="rounded-2xl border border-white/10 p-4">
                <CarFront className="mx-auto h-6 w-6" />
                <p className="mt-2 text-xs">Motor</p>
                <p className="mt-1 text-lg font-bold flex items-center justify-center"><IndianRupee className="h-5 w-5" />{PRICES.motor.price}<span className="ml-1 text-xs font-medium">/ {PRICES.motor.unit}</span></p>
              </div>
            </div>
            <PrimaryButton href={GOOGLE_FORM_URL}>
              Get My Quote
            </PrimaryButton>
            <p className="mt-2 text-[11px] text-white/60">
              *Prices are indicative and vary by age, city, coverage, IDV, and insurer. Final premium after personalized assessment.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function TrustedBar() {
  return (
    <div className="border-y border-white/10 bg-slate-900/50">
      <Container className="flex flex-wrap items-center justify-center gap-6 py-4 text-xs text-white/60">
        <span>IRDAI-Compliant Advice</span>
        <span>•</span>
        <span>Zero Hidden Charges</span>
        <span>•</span>
        <span>Claims Support</span>
        <span>•</span>
        <span>Top Insurer Network</span>
      </Container>
    </div>
  );
}

function Services() {
  const cards = [
    {
      icon: <HeartPulse className="h-6 w-6" />,
      title: "Health Insurance",
      points: [
        "Individual & Family Floater plans",
        "Cashless hospitalization network",
        "Tax benefits under Section 80D",
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Life Insurance",
      points: [
        "Term, ULIP & Endowment guidance",
        "Right sum assured & riders",
        "Goal-based planning for family",
      ],
    },
    {
      icon: <CarFront className="h-6 w-6" />,
      title: "Motor Insurance",
      points: [
        "Private car & two-wheeler policies",
        "Third-party & comprehensive cover",
        "NCB preservation & easy renewals",
      ],
    },
  ];
  return (
    <section id="services" className="py-16">
      <Container>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-bold md:text-4xl"
        >
          Services Tailored to You
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              whileHover={{ y: -4 }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10 transition-shadow hover:shadow-xl hover:shadow-indigo-600/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600/90 ring-1 ring-white/10">
                {c.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{c.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-white/60" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between">
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-indigo-300 hover:text-indigo-200"
                >
                  Get a Quote
                </a>
                <ArrowRight className="h-4 w-4 text-white/60" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      icon: <HeartPulse className="h-5 w-5" />,
      title: PRICES.health.label,
      price: PRICES.health.price,
      unit: PRICES.health.unit,
      items: ["Family floater options", "Cashless claims help", "Free renewal reminders"],
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: PRICES.life.label,
      price: PRICES.life.price,
      unit: PRICES.life.unit,
      items: ["Term cover guidance", "Right riders & add-ons", "Goal-based planning"],
    },
    {
      icon: <CarFront className="h-5 w-5" />,
      title: PRICES.motor.label,
      price: PRICES.motor.price,
      unit: PRICES.motor.unit,
      items: ["Third-party & own damage", "Zero dep add-on help", "Fast renewals"],
      highlight: true,
    },
  ];
  return (
    <section id="pricing" className="py-16">
      <Container>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-bold md:text-4xl"
        >
          Transparent, Indicative Starting Prices
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-white/70">
          Exact premiums depend on age, city, vehicle details, IDV, and coverage. Use the quote form for a personalized plan.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <motion.div
              key={t.title}
              whileHover={{ y: -6 }}
              className={`rounded-3xl border bg-white/5 p-6 ring-1 ring-white/10 ${
                t.highlight ? "border-indigo-500/30 shadow-xl shadow-indigo-600/10" : "border-white/10"
              }`}
            >
              <div className="flex items-center gap-2 text-white/80">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/90 ring-1 ring-white/10">
                  {t.icon}
                </div>
                <h3 className="text-lg font-semibold">{t.title}</h3>
              </div>
              <div className="mt-4 flex items-end gap-1">
                <IndianRupee className="h-6 w-6" />
                <span className="text-3xl font-bold">{t.price}</span>
                <span className="mb-1 text-xs text-white/70">/ {t.unit}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {t.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-white/60" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
              <PrimaryButton href={GOOGLE_FORM_URL}>
                Get Personalized Quote
              </PrimaryButton>
              <p className="mt-2 text-[11px] text-white/60">Taxes as applicable. Final price after proposal details.</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WhyUs() {
  const points = [
    { icon: <User className="h-5 w-5" />, title: "Personal Advisor", text: "One point contact from purchase to claims support." },
    { icon: <FileText className="h-5 w-5" />, title: "Paperwork Simplified", text: "We handle comparisons, rider advice, and renewals." },
    { icon: <ShieldCheck className="h-5 w-5" />, title: "Trusted Insurers", text: "Guidance across top, IRDAI-compliant insurers." },
  ];
  return (
    <section id="why-us" className="py-16">
      <Container>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-bold md:text-4xl"
        >
          Why Choose {AGENCY_NAME}?
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {points.map((p) => (
            <motion.div key={p.title} whileHover={{ y: -4 }} className="rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/90 ring-1 ring-white/10">{p.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Process() {
  const steps = [
    { step: 1, title: "Share Details", text: "Fill the quick Google Form with basic info.", cta: "Open Form", href: GOOGLE_FORM_URL },
    { step: 2, title: "Compare & Choose", text: "Get curated options and rider recommendations.", cta: "Talk to Vinay", href: `tel:${MOBILE_RAW}` },
    { step: 3, title: "Secure & Support", text: "Complete purchase and get ongoing claim support.", cta: "WhatsApp", href: `https://wa.me/${MOBILE_RAW}` },
  ];
  return (
    <section id="process" className="py-16">
      <Container>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-bold md:text-4xl"
        >
          Simple 3‑Step Process
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <motion.div key={s.step} whileHover={{ y: -4 }} className="rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/90 text-sm font-bold ring-1 ring-white/10">{s.step}</div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.text}</p>
              <GhostButton href={s.href} newTab={true}>
                {s.cta}
              </GhostButton>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      name: "Amit S.",
      text: "Got my family's health cover sorted in a day. Clear advice, no pressure.",
    },
    { name: "Neha R.", text: "Term plan explained simply. Claims support promise gives peace of mind." },
    { name: "Rahul K.", text: "Car renewal was quick with the right add-ons. Thanks!" },
  ];
  return (
    <section className="py-16">
      <Container>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-bold md:text-4xl"
        >
          Happy Clients, Real Results
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10"
            >
              <div className="flex items-center gap-2 text-amber-300">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-white/80">“{t.text}”</p>
              <div className="mt-4 text-xs text-white/60">— {t.name}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "Are these prices final?", a: "No. They are indicative starting premiums. Final quote depends on details like age, city, medical history, vehicle IDV, and coverage." },
    { q: "Do you help with claims?", a: "Yes, you get guidance on documentation and claim process with the insurer." },
    { q: "Can I pay online?", a: "Absolutely. You can complete proposals and payments through the insurer's secure portal." },
  ];
  return (
    <section id="faq" className="py-16">
      <Container>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-bold md:text-4xl"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="mx-auto mt-8 max-w-3xl divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/5">
          {items.map((f, i) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base font-semibold text-white/90">
                {f.q}
                <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-xs text-white/70 group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16">
      <Container>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-bold md:text-4xl"
        >
          Contact {AGENCY_NAME}
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
            <div className="text-sm font-semibold text-white/80">Call</div>
            <a href={`tel:${MOBILE_RAW}`} className="mt-2 inline-flex items-center gap-2 text-white/70 hover:text-white">
              <Phone className="h-4 w-4" /> {MOBILE}
            </a>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
            <div className="text-sm font-semibold text-white/80">Email</div>
            <a href={`mailto:${EMAIL}`} className="mt-2 inline-flex items-center gap-2 text-white/70 hover:text-white">
              <Mail className="h-4 w-4" /> {EMAIL}
            </a>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
            <div className="text-sm font-semibold text-white/80">Quote Form</div>
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-indigo-300 hover:text-indigo-200">
              Open Google Form <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center">
          <GhostButton href={`https://wa.me/${MOBILE_RAW}`}>
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </GhostButton>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-white/60">
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center md:text-left">
          <div className="font-semibold text-white/80">{AGENCY_NAME}</div>
          <div>Agent: {AGENT_NAME}</div>
          <div className="mt-1">Phone: <a href={`tel:${MOBILE_RAW}`} className="hover:text-white">{MOBILE}</a> · Email: <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a></div>
        </div>
        <div className="text-center md:text-right">
          <div className="text-[11px]">© {new Date().getFullYear()} {AGENCY_NAME}. All rights reserved.</div>
          <div className="mt-1 text-[11px]">Disclaimer: Insurance is the subject matter of solicitation. Read all documents carefully before purchase.</div>
        </div>
      </Container>
    </footer>
  );
}

function QuickActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <motion.a
        href={`https://wa.me/${MOBILE_RAW}`}
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 shadow-lg ring-1 ring-white/10"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </motion.a>
      <motion.a
        href={`tel:${MOBILE_RAW}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 shadow-lg ring-1 ring-white/10"
        aria-label="Call"
      >
        <Phone className="h-6 w-6 text-white" />
      </motion.a>
    </div>
  );
}
