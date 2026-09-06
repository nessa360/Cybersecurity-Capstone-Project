/* Quiet Signal reminder: warm paper, ink, oxide lime, editorial asymmetry, signal rails, calm motion. */
import { useEffect, useState } from "react";
import { Link, Route, Switch, useLocation } from "wouter";
import {
  ArrowUpRight,
  ChevronDown,
  CircleHelp,
  LayoutDashboard,
  Menu,
  MoveUpRight,
  ShieldCheck,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSession, clearSession, type Session } from "@/lib/onyx";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Account from "@/pages/Account";
import Transfer from "@/pages/Transfer";
import Findings from "@/pages/Findings";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/NotFound";

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="brand-lockup" aria-label="Onyx Global home">
      <img
        src="/onyx-mark.png"
        alt=""
        className={compact ? "brand-mark compact" : "brand-mark"}
      />
      <span className="brand-wordmark">
        <strong>ONYX</strong>
        <span>GLOBAL</span>
      </span>
    </Link>
  );
}

function SiteHeader({ session, onSignOut }: { session: Session | null; onSignOut: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location, navigate] = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const links = [
    { label: "Services", href: "/#services" },
    { label: "Security", href: "/#security" },
    { label: "About", href: "/#about" },
    { label: "Assessment", href: "/findings" },
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a href="mailto:hello@onyx.example" className="header-help" aria-label="Contact Onyx Global">
            <CircleHelp size={17} strokeWidth={1.8} />
            <span>Help centre</span>
          </a>
          {session ? (
            <div className="header-session">
              <Link href="/dashboard" className="session-chip">
                <span className="status-dot" />
                {session.username}
              </Link>
              <button className="quiet-button" onClick={onSignOut}>Sign out</button>
            </div>
          ) : (
            <Button asChild className="header-cta">
              <Link href="/login">Log in <ArrowUpRight size={16} /></Link>
            </Button>
          )}
          <button className="mobile-menu-button" aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="mobile-menu">
          <div className="container mobile-menu-inner">
            {links.map((link) => <a key={link.href} href={link.href} className="mobile-nav-link">{link.label}</a>)}
            <div className="mobile-menu-rule" />
            {session ? (
              <>
                <Link href="/dashboard" className="mobile-nav-link">Open workspace <MoveUpRight size={15} /></Link>
                <button onClick={onSignOut} className="mobile-nav-link mobile-signout">Sign out</button>
              </>
            ) : <Link href="/login" className="mobile-nav-link">Log in <MoveUpRight size={15} /></Link>}
          </div>
        </div>
      )}
    </header>
  );
}

function AppFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand-column">
          <Brand compact />
          <p>Move money with less noise.</p>
          <div className="footer-demo-note"><ShieldCheck size={15} /> Fictional local demonstration environment</div>
        </div>
        <div className="footer-links-column">
          <span className="footer-heading">Explore</span>
          <a href="/#services">Services</a>
          <a href="/#security">Security</a>
          <a href="/#about">About Onyx</a>
        </div>
        <div className="footer-links-column">
          <span className="footer-heading">Workspace</span>
          <Link href="/login">Log in</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/transfer">Send money</Link>
          <Link href="/findings">Assessment findings</Link>
          <Link href="/settings">Security settings</Link>
        </div>
        <div className="footer-links-column footer-contact">
          <span className="footer-heading">Say hello</span>
          <a href="mailto:hello@onyx.example">hello@onyx.example</a>
          <span>Accra · London · Everywhere</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Onyx Global. Fictional company for authorized security assessment coursework.</span>
        <span>Not a bank. Not a payment service.</span>
      </div>
    </footer>
  );
}

function App() {
  const [session, setSession] = useState<Session | null>(() => getSession());

  function handleSignOut() {
    clearSession();
    setSession(null);
    window.location.href = "/";
  }

  function handleSession(next: Session) {
    setSession(next);
  }

  return (
    <div className="app-frame">
      <SiteHeader session={session} onSignOut={handleSignOut} />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/login">
            <Login onSession={handleSession} />
          </Route>
          <Route path="/dashboard">
            <Dashboard session={session} onSession={handleSession} />
          </Route>
          <Route path="/account/:id">
            {(params) => <Account accountId={params.id} session={session} />}
          </Route>
          <Route path="/transfer">
            <Transfer session={session} />
          </Route>
          <Route path="/findings" component={Findings} />
          <Route path="/settings" component={Settings} />
          <Route path="/404" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
