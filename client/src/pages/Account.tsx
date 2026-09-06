/* Quiet Signal reminder: warm paper, ink, oxide lime, editorial asymmetry, signal rails, calm motion. */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowUpRight, CircleAlert, Copy, Mail, ShieldAlert, UserRound, WalletCards } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchAccount, formatMoney, getSecurityMode, type Account as AccountType, type Session } from "@/lib/onyx";

const previewAccount: AccountType = { name: "Akosua Mensah", username: "akosua", accountNumber: "OG-0001-TEST", balance: 1250.75, email: "akosua@example.test" };

export default function Account({ accountId, session }: { accountId: string; session: Session | null }) {
  const [account, setAccount] = useState<AccountType | null>(null);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState(!session);

  useEffect(() => {
    if (!session) { setAccount(previewAccount); setPreview(true); return; }
    if (getSecurityMode() === "remediated" && Number(accountId) !== session.userId) {
      setError("Remediated mode blocked this cross-account request: the requested object does not belong to the signed-in user.");
      setAccount(null);
      setPreview(false);
      return;
    }
    fetchAccount(accountId, session.token).then((body) => { setAccount(body.account); setPreview(false); }).catch((requestError) => { setError(requestError instanceof Error ? requestError.message : "The local API is unavailable."); setAccount(previewAccount); setPreview(true); });
  }, [accountId, session]);

  return (
    <div className="account-page">
      <div className="container account-topline"><Link href="/dashboard" className="back-link"><ArrowLeft size={16} /> Back to workspace</Link><span>OG / ACCOUNT DETAILS / {accountId.padStart(2, "0")}</span></div>
      <div className="container account-layout">
        <aside className="account-sidebar"><span className="account-section-number">05</span><p className="eyebrow">Object detail</p><h1>One account,<br /><em>clearly seen.</em></h1><p>Every field on this page is fictional. The request is made against the local simulated API so the authorization behavior can be reviewed in context.</p><div className="account-sidebar-note"><ShieldAlert size={17} /><span><strong>Assessment note</strong><small>OG-002 is intentionally present in the backend demo.</small></span></div></aside>
        <section className="account-detail-area">
          {(preview || error) && <div className={`preview-banner ${error && !preview ? "preview-banner-remediated" : ""}`}><CircleAlert size={16} /> {error || "Viewing fictional preview data. Log in with the local API to make a live request."}</div>}
          {account ? <>
            <div className="account-detail-header"><div><p className="eyebrow">FICTIONAL CUSTOMER RECORD</p><h2>{account.name}</h2><span className="account-username">@{account.username}</span></div><div className="account-detail-actions"><Button className="button-lime" asChild><Link href="/transfer">Send money <ArrowUpRight size={16} /></Link></Button><button className="icon-button" aria-label="Copy account number" onClick={() => navigator.clipboard?.writeText(account.accountNumber)}><Copy size={17} /></button></div></div>
            <div className="account-balance-card"><div><span className="card-kicker">AVAILABLE BALANCE</span><div className="account-large-balance">{formatMoney(account.balance)}</div><span className="account-balance-foot">Updated just now · Simulated account</span></div><div className="balance-card-mark"><WalletCards size={30} strokeWidth={1.3} /><span>ONYX<br />WALLET</span></div></div>
            <div className="details-grid"><div className="details-card"><div className="details-card-heading"><UserRound size={18} /><span>IDENTITY</span></div><dl><div><dt>Full name</dt><dd>{account.name}</dd></div><div><dt>Username</dt><dd>{account.username}</dd></div><div><dt>Email</dt><dd>{account.email}</dd></div></dl></div><div className="details-card"><div className="details-card-heading"><WalletCards size={18} /><span>ACCOUNT</span></div><dl><div><dt>Account number</dt><dd>{account.accountNumber}</dd></div><div><dt>Account type</dt><dd>Onyx everyday wallet</dd></div><div><dt>Status</dt><dd><span className="inline-status"><i /> Active in simulation</span></dd></div></dl></div></div>
            <div className="account-contact"><Mail size={18} /><span>Need to update a detail?</span><a href="mailto:support@onyx.example">Contact the fictional support desk <ArrowUpRight size={15} /></a></div>
          </> : <div className="loading-block">Loading account record…</div>}
        </section>
      </div>
    </div>
  );
}
