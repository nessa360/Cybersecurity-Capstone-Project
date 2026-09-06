/* Quiet Signal reminder: warm paper, ink, oxide lime, editorial asymmetry, signal rails, calm motion. */
import { Link } from "wouter";
import {
  ArrowDownRight,
  ArrowUpRight,
  Banknote,
  Building2,
  ChevronRight,
  CircleCheck,
  Globe2,
  LockKeyhole,
  MoveRight,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const heroUrl = "/manus-storage/onyx-hero-editorial_ae4c16b1.jpg";
const securityUrl = "/manus-storage/onyx-security-pattern_dd7e73db.jpg";

const services = [
  { icon: WalletCards, number: "01", title: "Digital wallets", copy: "One clear place for everyday money, with the details you need close at hand." },
  { icon: Banknote, number: "02", title: "Move money", copy: "Send, receive, and organize transfers without the usual financial noise." },
  { icon: Building2, number: "03", title: "Business payments", copy: "Keep teams, suppliers, and recurring costs moving on one lucid platform." },
];

function SignalRail({ label, dark = false }: { label: string; dark?: boolean }) {
  return <div className={`signal-rail ${dark ? "signal-rail-dark" : ""}`}><span>{label}</span><i /></div>;
}

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-orbit" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <SignalRail label="OG / 01 — CLEARER MONEY" />
            <p className="eyebrow eyebrow-lime">A calmer way to move through the world</p>
            <h1>Keep money moving.<br /><em>Keep the signal clear.</em></h1>
            <p className="hero-intro">Onyx Global gives people and businesses a clear, connected layer for wallets, payments, and the everyday movement of money — without the financial theater.</p>
            <div className="hero-actions">
              <Button asChild className="button-lime"><Link href="/login">Open your workspace <ArrowUpRight size={17} /></Link></Button>
              <a href="#services" className="text-link text-link-light">Explore services <MoveRight size={17} /></a>
            </div>
            <div className="hero-footnote"><CircleCheck size={16} /> Fictional platform for authorized cybersecurity assessment coursework</div>
          </div>
          <div className="hero-visual-wrap">
            <div className="hero-visual" style={{ backgroundImage: `url(${heroUrl})` }} role="img" aria-label="Abstract paper and glass forms representing connected money movement" />
            <div className="hero-account-card">
              <div className="account-card-top"><span className="card-kicker">SIMULATED BALANCE</span><span className="card-status"><i /> LIVE DEMO</span></div>
              <p className="balance-label">Akosua’s Onyx wallet</p>
              <div className="balance-value">GH₵1,250<span>.75</span></div>
              <div className="account-card-bottom"><span>OG-0001-TEST</span><ArrowUpRight size={18} /></div>
            </div>
            <div className="hero-floating-note"><span>02</span><p>Move without<br /><strong>friction.</strong></p></div>
          </div>
        </div>
        <div className="container hero-metric-strip">
          <div><span className="metric-value">01</span><span>clear view of your money</span></div>
          <div><span className="metric-value">24/7</span><span>account access, on your terms</span></div>
          <div><span className="metric-value">0</span><span>real accounts in this simulation</span></div>
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="container section-heading-row">
          <SignalRail label="OG / 02 — THE EVERYDAY LAYER" />
          <div className="section-heading-copy"><p className="eyebrow">Built for the actual shape of life</p><h2>Less friction.<br /><em>More flow.</em></h2></div>
          <p className="section-heading-intro">From first transfer to final receipt, Onyx keeps the signal clear so you can spend more energy on what comes next.</p>
        </div>
        <div className="container services-list">
          {services.map(({ icon: Icon, number, title, copy }) => (
            <article key={number} className="service-row">
              <span className="service-number">{number}</span>
              <div className="service-icon"><Icon size={24} strokeWidth={1.7} /></div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href="#about" className="round-arrow" aria-label={`Learn more about ${title}`}><ArrowUpRight size={18} /></a>
            </article>
          ))}
        </div>
      </section>

      <section id="security" className="security-section">
        <div className="container security-grid">
          <div className="security-image" style={{ backgroundImage: `url(${securityUrl})` }} role="img" aria-label="Abstract layered paper and thread representing a transparent system" />
          <div className="security-copy">
            <SignalRail label="OG / 03 — A NOTE ON TRUST" dark />
            <p className="eyebrow eyebrow-lime">Trust is a practice</p>
            <h2>Clarity is its<br /><em>own kind of security.</em></h2>
            <p>We make the movement visible: simple balances, readable activity, and clear next steps. In this coursework environment, every account, transaction, and identity is fictional by design.</p>
            <div className="security-points">
              <div><ShieldCheck size={20} /><span><strong>Grounded by design</strong> <small>Plain-language states, no mystery.</small></span></div>
              <div><LockKeyhole size={20} /><span><strong>Local by design</strong> <small>Connected to your loopback API only.</small></span></div>
              <div><Sparkles size={20} /><span><strong>Open to inspection</strong> <small>Built for learning, testing, and documentation.</small></span></div>
            </div>
            <Link href="/login" className="text-link text-link-light">Enter the local demo <MoveRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container about-grid">
          <div className="about-label"><span>OG / 04</span><span>THE SHORT VERSION</span></div>
          <div className="about-copy"><p className="eyebrow">A fictional company with a real purpose</p><h2>Move money with<br /><em>less noise.</em></h2><p>Onyx Global is a made-up fintech and mobile-money company created for an authorized vulnerability assessment project. The interface is intentionally realistic; the data, balances, accounts, and transfers are not.</p><Link href="/dashboard" className="inline-cta">See the demo workspace <ChevronRight size={17} /></Link></div>
          <div className="about-side"><Globe2 size={30} strokeWidth={1.3} /><span>Accra → London → Everywhere</span><small>Fictional operations map</small></div>
        </div>
      </section>
    </div>
  );
}
