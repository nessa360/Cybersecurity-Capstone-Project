/* Quiet Signal reminder: warm paper, ink, oxide lime, editorial asymmetry, signal rails, calm motion. */
import { FormEvent, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowUpRight, Check, CircleAlert, HandCoins, Info, Send, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Session } from "@/lib/onyx";

const stillLifeUrl = "/manus-storage/onyx-transfer-stilllife_3d4417ec.jpg";

export default function Transfer({ session }: { session: Session | null }) {
  const [submitted, setSubmitted] = useState(false);
  const [amount, setAmount] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="transfer-page">
      <div className="container transfer-topline"><Link href="/dashboard" className="back-link"><ArrowLeft size={16} /> Back to workspace</Link><span>OG / TRANSFER / SIMULATED ONLY</span></div>
      <div className="container transfer-layout">
        <section className="transfer-copy"><div className="transfer-image" style={{ backgroundImage: `url(${stillLifeUrl})` }} role="img" aria-label="Abstract folded ledger forms meeting at a point" /><div className="transfer-copy-overlay"><span className="transfer-number">06</span><p className="eyebrow eyebrow-lime">Send a little clarity</p><h1>Make a move<br /><em>that makes sense.</em></h1><p>Use this page to walk through a simulated transfer. Nothing leaves this local environment, and no payment provider is connected.</p></div></section>
        <section className="transfer-form-area"><div className="transfer-form-heading"><p className="eyebrow">NEW SIMULATED TRANSFER</p><h2>Send money</h2><p>Fill in fictional recipient details to create a demonstration receipt.</p></div><div className="transfer-notice"><Info size={17} /><span><strong>This is not a payment flow.</strong> It records no real transaction and does not contact a bank.</span></div>{submitted ? <div className="transfer-success"><div className="success-icon"><Check size={24} /></div><p className="eyebrow">TRANSFER SIMULATED</p><h3>Your handoff is on record.</h3><p>That was a fictional transfer for <strong>GH₵{Number(amount || 0).toFixed(2)}</strong>. No money moved, and no external service was contacted.</p><button onClick={() => { setSubmitted(false); setAmount(""); }} className="text-link">Create another simulation <ArrowUpRight size={15} /></button></div> : <form onSubmit={handleSubmit} className="transfer-form"><div className="form-field"><label htmlFor="recipient">Recipient name</label><input id="recipient" placeholder="e.g. Maya Osei" required /></div><div className="form-field"><label htmlFor="account-number">Recipient account number</label><input id="account-number" placeholder="e.g. OG-0018-TEST" required /></div><div className="form-field"><label htmlFor="amount">Transfer amount</label><div className="amount-input"><span>GH₵</span><input id="amount" type="number" min="0.01" step="0.01" placeholder="0.00" value={amount} onChange={(event) => setAmount(event.target.value)} required /></div></div><div className="form-field"><label htmlFor="description">Transfer description <span>Optional</span></label><input id="description" placeholder="e.g. Project deposit" /></div><Button type="submit" className="submit-button">Simulate transfer <Send size={16} /></Button></form>}<div className="transfer-safe-note"><ShieldCheck size={18} /><span><strong>Assessment-safe by design</strong><small>Logged only in this browser session. {session ? `Signed in as ${session.username}.` : "Preview mode is active."}</small></span></div></section>
      </div>
    </div>
  );
}
