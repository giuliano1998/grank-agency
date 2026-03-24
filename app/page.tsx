import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ContactForm from "@/components/ContactForm";

const services = [
  {
    number: "01",
    slug: "eblasts",
    title: "E-Blast Campaigns",
    description:
      "High-conversion email campaigns deployed to broker networks of 10,000+ contacts — built to drive opens, clicks, and qualified inquiries.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    pricing: [
      { label: "Copy Only", price: "$300" },
      { label: "Design Only (HTML)", price: "$500" },
      { label: "Full Campaign", price: "$800" },
    ],
    featured: true,
  },
  {
    number: "02",
    slug: "social",
    title: "Social Media Management",
    description:
      "On-brand content that positions your development as the definitive luxury choice. Strategy, design, copy and scheduling — end to end.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
    pricing: [
      { label: "12 Posts/mo", price: "$1,200" },
      { label: "20 Posts + Stories", price: "$2,000" },
      { label: "Reels + Influencer", price: "$3,500" },
    ],
  },
  {
    number: "03",
    slug: "landing",
    title: "Landing Pages & Microsites",
    description:
      "Digital experiences as premium as the properties they represent — from lead capture pages to full broker portals with virtual tours.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    pricing: [
      { label: "Lead Capture Page", price: "$1,500" },
      { label: "Multi-page Microsite", price: "$4,000" },
      { label: "Full Broker Portal", price: "$8,500+" },
    ],
  },
  {
    number: "04",
    slug: "meta",
    title: "Meta Ads Management",
    description:
      "Hyper-targeted campaigns on Facebook and Instagram reaching qualified buyers. 32% CPL reduction. 500+ leads per launch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    pricing: [
      { label: "Setup + Creative", price: "$750" },
      { label: "Monthly Management", price: "$1,500/mo" },
      { label: "Full-funnel", price: "$2,500/mo" },
    ],
  },
  {
    number: "05",
    slug: "seo",
    title: "SEO + Google My Business",
    description:
      "Dominating local search so your development appears first when buyers look for luxury real estate in South Florida.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    pricing: [
      { label: "GMB Optimization", price: "$500" },
      { label: "SEO Retainer", price: "$1,200/mo" },
      { label: "Full SEO + GMB", price: "$2,200/mo" },
    ],
  },
  {
    number: "06",
    slug: "automation",
    title: "Lead Automation",
    description:
      "CRM workflows on GoHighLevel automating broker outreach, nurturing and follow-up. 20+ hours saved per month. 40% response rate lift.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    pricing: [
      { label: "GHL Setup + Basic", price: "$1,000" },
      { label: "CRM + Sequences", price: "$2,000" },
      { label: "Full Automation", price: "$4,500+" },
    ],
  },
];

const portfolioHighlights = [
  {
    image: "/images/metropica-eblast.jpg",
    title: "Metropica Penthouse Launch",
    client: "One Metropica",
    stat: "32% Open Rate",
  },
  {
    image: "/images/icon-top-producer.png",
    title: "Top Producers Alert",
    client: "Icon Beach Residences",
    stat: "140+ Leads",
  },
  {
    image: "/images/icon-rosewood-eblast.jpg",
    title: "VIP Preview Campaign",
    client: "Icon Beach / Rosewood",
    stat: "500+ Recipients",
  },
];

const pricingPlans = [
  {
    name: "Essentials",
    sub: "Foundation Phase",
    price: "$2,500",
    period: "/mo",
    features: [
      "Social Media Management",
      "Monthly E-Blast",
      "GMB Optimization",
      "Basic Lead Capture",
      "Monthly Report",
    ],
    featured: false,
  },
  {
    name: "Creative Partner",
    sub: "Growth Engine",
    price: "$4,500",
    period: "/mo",
    features: [
      "Premium Content Strategy",
      "Weekly E-Blasts",
      "Active Meta Ads",
      "GRank AI Integration",
      "Custom Landing Page",
      "Bi-weekly Calls",
    ],
    featured: true,
  },
  {
    name: "Full Service",
    sub: "Market Dominance",
    price: "$6,500",
    period: "/mo",
    features: [
      "Total Branding Ecosystem",
      "Video Content Production",
      "Global Meta & Google Ads",
      "Full CRM Automation",
      "Dedicated Strategist",
      "Priority Support",
    ],
    featured: false,
  },
];

/** Ghost section number — uses clamp for fluid mobile scaling */
function N({ n }: { n: string }) {
  return (
    <span
      aria-hidden="true"
      className="block select-none pointer-events-none font-black leading-none"
      style={{
        fontSize: "clamp(5rem, 12vw, 9rem)",
        color: "rgba(255,255,255,0.04)",
      }}
    >
      {n}
    </span>
  );
}

/** Section heading — fluid type scale */
function SectionHeading({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <h2
      className={`font-black text-white uppercase tracking-tighter ${className}`}
      style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", ...style }}
    >
      {children}
    </h2>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-black" />
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(37,99,235,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(37,99,235,0.08) 0%, transparent 40%)",
          }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* ↓ section-container defined in globals.css as plain CSS */}
        <div className="section-container relative z-10 pt-24 md:pt-28 pb-12 md:pb-16">
          <p className="text-blue-500 text-xs font-medium uppercase tracking-[0.3em] mb-6">
            Boutique Digital Marketing · South Florida Luxury Real Estate
          </p>
          <h1
            className="font-black text-white uppercase tracking-tighter leading-none mb-8"
            style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}
          >
            We Build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700">
              Visibility
            </span>
            <br />
            &amp; Authority.
          </h1>
          <p className="text-zinc-400 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10 text-center">
            Clear strategy, compelling content, and measurable results for South Florida&apos;s most iconic luxury real estate developments.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-blue-600 text-white font-medium uppercase tracking-widest text-xs rounded-sm hover:bg-blue-700 transition-all duration-300"
            >
              Book Free Audit
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-blue-600 text-white font-medium uppercase tracking-widest text-xs rounded-sm hover:bg-blue-700 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
          <div className="mt-16 flex flex-col items-center gap-2 opacity-30">
            <span className="text-[9px] uppercase tracking-widest text-zinc-500">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-zinc-500 to-transparent" />
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ──────────────────────────────────────────────── */}
      <div className="py-10 bg-[#0a0a0a] overflow-hidden border-y border-white/5">
        <div
          className="flex gap-16 whitespace-nowrap"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {Array(2)
            .fill([
              "Fortune International Group",
              "One Metropica",
              "Icon Beach Residences",
              "Waldorf Astoria Pompano Beach",
              "Rivage Bal Harbour",
              "Viceroy Brickell",
              "The Related Group",
              "Baccarat Residences",
              "Andare Residences",
              "Six Fisher Island",
            ])
            .flat()
            .map((name, i) => (
              <span key={i} className="text-white/25 font-black uppercase text-sm tracking-widest flex-shrink-0">
                {name}
              </span>
            ))}
        </div>
      </div>

      {/* ─── STATS ────────────────────────────────────────────────── */}
      <section className="py-14 md:py-24 bg-black border-b border-white/5">
        <div className="section-container">
          <h2 className="text-center text-white font-black uppercase tracking-widest text-sm mb-10 pt-16">
            Brands That Trusted Us
          </h2>
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            <StatCounter end={5} suffix="+" label="Years in Luxury RE" />
            <StatCounter end={10} prefix="$" suffix="M+" label="Ad Spend Managed" />
            <StatCounter end={500} suffix="+" label="Qualified Leads" />
            <StatCounter end={18} suffix="+" label="Iconic Developments" />
          </AnimatedSection>
        </div>
      </section>

      {/* ─── WHAT WE DO ───────────────────────────────────────────── */}
      <section id="services" className="py-16 md:py-32 bg-[#050505]">
        <div className="section-container">
          <AnimatedSection className="mb-10 md:mb-16 text-center">
            <N n="01" />
            <SectionHeading className="mb-4" style={{ marginTop: "-0.3em" }}>
              What We Do
            </SectionHeading>
            <p className="text-zinc-400 font-light max-w-lg mx-auto text-sm text-center">
              Full-stack digital marketing built for the pace and precision of luxury real estate.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <AnimatedSection key={s.slug} delay={i * 60}>
                <ServiceCard {...s} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-14">
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-medium uppercase text-xs tracking-widest rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              See Full Service Details →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── REAL RESULTS ─────────────────────────────────────────── */}
      <section id="portfolio" className="py-16 md:py-32 bg-black">
        <div className="section-container">
          <AnimatedSection className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-14 gap-6">
            <div>
              <N n="02" />
              <SectionHeading style={{ marginTop: "-0.3em" }}>Real Results</SectionHeading>
            </div>
            <Link
              href="/portfolio"
              className="text-xs font-medium uppercase tracking-widest text-zinc-500 hover:text-white transition-colors flex items-center gap-2 flex-shrink-0"
            >
              View All Case Studies →
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {portfolioHighlights.map((item, i) => (
              <AnimatedSection
                key={item.title}
                delay={i * 80}
                className="group relative overflow-hidden cursor-pointer"
              >
                <div className="relative h-72 bg-[#111]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                      {item.stat}
                    </span>
                    <h3 className="text-white font-black uppercase tracking-tight text-sm mt-1">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs">{item.client}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-16 md:py-32 bg-[#050505]">
        <div className="section-container">
          <AnimatedSection className="text-center mb-10 md:mb-16">
            <N n="03" />
            <SectionHeading style={{ marginTop: "-0.3em" }}>What Clients Say</SectionHeading>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <TestimonialCarousel />
          </AnimatedSection>
        </div>
      </section>

      {/* ─── TEAM ─────────────────────────────────────────────────── */}
      <section id="team" className="py-16 md:py-32 bg-black">
        <div className="section-container">
          <AnimatedSection className="mb-10 md:mb-16 text-center">
            <N n="04" />
            <SectionHeading className="mb-6 text-center" style={{ marginTop: "-0.3em" }}>
              Built from the<br />inside out.
            </SectionHeading>
            <p className="text-zinc-400 font-light max-w-xl leading-relaxed text-sm text-center mx-auto">
              Our foundation was laid within South Florida&apos;s most prestigious real estate developers. We understand the nuance of luxury — we&apos;ve been in the boardroom.
            </p>
          </AnimatedSection>

          {/* Founders — top row, side by side */}
          <div className="flex flex-row justify-center gap-8 flex-wrap mb-12">
            {[
              { name: "Giuliano Raschetti", role: "Strategy & Growth", img: "/images/giuliano.png" },
              { name: "Oriana Raschetti", role: "Creative Direction", img: "/images/oriana.png" },
            ].map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 120} className="group w-full sm:w-[calc(50%-1rem)] max-w-xs">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#111]">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="mt-5 text-center">
                  <h4 className="text-base font-black text-white uppercase tracking-tight text-center">{member.name}</h4>
                  <p className="text-blue-500 text-xs uppercase tracking-widest mt-1 text-center">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Specialists — bottom 3-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Maria Valdes", role: "Paid Media Specialist", img: "/images/giuliano.png" },
              { name: "Diego Fontana", role: "SEO & Content Lead", img: "/images/oriana.png" },
              { name: "Laura Pineda", role: "CRM & Automation", img: "/images/giuliano.png" },
            ].map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 100} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#111]">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-sm font-black text-white uppercase tracking-tight text-center">{member.name}</h4>
                  <p className="text-blue-500 text-xs uppercase tracking-widest mt-1 text-center">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ──────────────────────────────────────────────── */}
      <section id="pricing" className="py-16 md:py-32 bg-[#050505]">
        <div className="section-container">
          <AnimatedSection className="text-center mb-10 md:mb-16 pt-16">
            <N n="05" />
            <SectionHeading className="mb-4" style={{ marginTop: "-0.3em" }}>
              Strategic Packages
            </SectionHeading>
            <p className="text-zinc-400 font-light max-w-lg mx-auto text-sm">
              Tailored solutions for pre-construction launches and established brokerages. No hidden fees.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <AnimatedSection key={plan.name} delay={i * 80}>
                <div
                  className={`p-10 flex flex-col justify-between min-h-[500px] relative bg-gray-900 rounded-xl${
                    plan.featured
                      ? " border-2 border-blue-500"
                      : " border-2 border-gray-700"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute top-4 right-4 bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                      MOST SELECTED
                    </span>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-white uppercase mb-1">{plan.name}</h3>
                    <p className="text-zinc-500 text-xs font-medium uppercase tracking-widest mb-8">
                      {plan.sub}
                    </p>
                    <div className="mb-8">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <ul className="mb-10">
                      {plan.features.map((f) => (
                        <li key={f} className="text-gray-300 flex items-center gap-2 py-2">
                          <span className="text-blue-400 font-bold text-xs flex-shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base px-6 py-4 rounded-lg mt-5 text-center font-medium uppercase tracking-widest block transition-all duration-300"
                  >
                    GET A QUOTE
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-36 bg-black overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 100%, rgba(37,99,235,0.10) 0%, transparent 60%)",
          }}
        />
        <div className="section-container relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <p className="text-blue-500 text-xs font-medium uppercase tracking-[0.3em] mb-6">
              Let&apos;s build together
            </p>
            <h2
              className="font-black text-white uppercase tracking-tighter leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
            >
              Ready to see{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                results?
              </span>
            </h2>
            <p className="text-zinc-400 font-light max-w-md mx-auto mb-10 text-sm">
              Join South Florida&apos;s real estate elite. Your first strategy session is on us.
            </p>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
