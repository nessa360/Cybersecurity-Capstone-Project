/* Quiet Signal reminder: warm paper, ink, oxide lime, editorial asymmetry, signal rails, calm motion. */
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowDownLeft, ArrowUpRight, ChevronRight, CircleAlert, Ellipsis, HandCoins, LayoutDashboard, Plus, ReceiptText, Send, ShieldCheck, UserRound, WalletCards } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchAccount, formatMoney, type Account, type Session, demoTransactions } from "@/lib/onyx";

const fallbackAccount: Account = { name: "Akosua Mensah", username: "akosua", accountNumber: "OG-0001-TEST", balance: 1250.75, email: "akosua@example.test" };

function DashboardNav({ active = "Overview" }: { active?: string }) {
  const items = [{ label: "Overview", href: "/dashboard", icon: LayoutDashboard }, { label: "Account details", href: "/account/1", icon: UserRound }, { label: "Send money", href: "/transfer", icon: Send }];
  return <aside className="workspace-nav"><div className="workspace-nav-label">YOUR WORKSPACE</div>{items.map(({ label, href, icon: Icon }) => <Link key={label} href={href} className={`workspace-nav-item ${active === label ? "active" : ""}`}><Icon size={17} strokeWidth={1.8} />{label}{active === label && <span className="nav-item-bar" />}</Link>)}<div className="workspace-nav-rule" /><div className="workspace-nav-label">DEMO CONTEXT</div><div className="workspace-nav-context"><ShieldCheck size={17} /><span><strong>Local only</strong><small>Authorized assessment</small></span></div></aside>;
}

export default function Dashboard({ session }: { session: Session | null; onSession: (session: Session) => void }) {
  const [, navigate] = useLocation();
  const [account, setAccount] = useState<Account>(fallbackAccount);
  const [loading, setLoading] = useState(Boolean(session));
  const [apiState, setApiState] = useState<"connected" | "preview" | "error">(session ? "connected" : "preview");

  useEffect(() => {
    if (!session) return;
    fetchAccount(session.userId, session.token).then((body) => {
      setAccount(body.account);
      setApiState("connected");
    }).catch(() => setApiState("error")).finally(() => setLoading(false));
  }, [session]);

  const greetingName = account.name.split(" ")[0];

  return (
    <div className="workspace-page">
      <div className="workspace-topline"><span>OG / WORKSPACE</span><span className="workspace-breadcrumb">Onyx Global <ChevronRight size={13} /> Overview</span><div className={`api-badge ${apiState}`}><span />{apiState === "connected" ? "LOCAL API CONNECTED" : apiState === "error" ? "API UNAVAILABLE · PREVIEW" : "FICTIONAL PREVIEW"}</div></div>
      <div className="container workspace-layout">
        <DashboardNav />
        <section className="workspace-main">
          <div className="workspace-heading-row"><div><p className="eyebrow">Wednesday, 29 August 2026</p><h1>Good morning, <em>{greetingName}.</em></h1></div><div className="workspace-heading-actions"><Button className="button-lime" asChild><Link href="/transfer"><Plus size={17} /> New transfer</Link></Button><button className="workspace-more" aria-label="More workspace actions"><Ellipsis size={20} /></button></div></div>
          {apiState === "error" && <div className="workspace-alert"><CircleAlert size={18} /><span>The local API could not be reached. You are viewing fictional preview data. Start the backend at <code>127.0.0.1:3000</code> to reconnect.</span></div>}
          <div className="balance-grid">
            <div className="balance-panel"><div className="panel-overline"><span>PRIMARY WALLET</span><WalletCards size={18} /></div><div className="dashboard-balance">{loading ? "Loading…" : formatMoney(account.balance)}</div><div className="balance-meta"><span>Available balance</span><span className="balance-up"><ArrowUpRight size={14} /> 4.2% this month</span></div><div className="balance-account">{account.accountNumber} <span>·</span> {account.username}</div></div>
            <div className="mini-panel mini-panel-lime"><div className="panel-overline"><span>QUICK ACTION</span><Send size={18} /></div><h3>Send money<br /><em>without friction.</em></h3><Link href="/transfer" className="panel-link">Start a transfer <ArrowUpRight size={16} /></Link></div>
            <div className="mini-panel mini-panel-report"><div className="panel-overline"><span>ACCOUNT HEALTH</span><ShieldCheck size={18} /></div><div className="health-score">Clear <span>·</span> <strong>Good</strong></div><p>All simulated systems are ready for review.</p><div className="health-line"><span /></div><div className="report-stamp">LOCAL / READY</div></div>
          </div>
          <div className="ledger-heading"><div><p className="eyebrow">ACTIVITY / LAST 30 DAYS</p><h2>Recent movement</h2></div><Link href={`/account/${session?.userId || 1}`} className="text-link">View account details <ArrowUpRight size={16} /></Link></div>
          <div className="ledger-card"><div className="ledger-header"><span>DESCRIPTION</span><span>DATE</span><span>AMOUNT</span><span /></div>{demoTransactions.map((transaction) => <div className="ledger-row" key={transaction.id}><div className={`transaction-mark ${transaction.tone}`}>{transaction.amount > 0 ? <ArrowDownLeft size={17} /> : <ArrowUpRight size={17} />}</div><div className="transaction-title"><strong>{transaction.title}</strong><span>{transaction.id}</span></div><span className="transaction-meta">{transaction.meta}</span><span className={`transaction-amount ${transaction.amount > 0 ? "positive" : ""}`}>{transaction.amount > 0 ? "+" : "−"}{formatMoney(Math.abs(transaction.amount))}</span><button className="row-more" aria-label={`More options for ${transaction.title}`}><Ellipsis size={18} /></button></div>)}<div className="ledger-footer"><ReceiptText size={16} /> All activity is fictional and simulated for coursework <button>View full ledger <ArrowUpRight size={14} /></button></div></div>
          <div className="workspace-footnote"><span><HandCoins size={16} /> Want to move money?</span><Link href="/transfer">Create a simulated transfer <ArrowUpRight size={15} /></Link></div>
        </section>
      </div>
    </div>
  );
}
