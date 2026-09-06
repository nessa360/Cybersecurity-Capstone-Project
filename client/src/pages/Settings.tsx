/* Quiet Signal reminder: warm paper, ink, oxide lime, editorial asymmetry, signal rails, calm motion. */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Check, ChevronRight, CircleAlert, Gauge, LockKeyhole, RotateCcw, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSecurityMode, setSecurityMode, type SecurityMode } from "@/lib/onyx";

export default function Settings() {
  const [mode, setMode] = useState<SecurityMode>(() => getSecurityMode());
  const [saved, setSaved] = useState(false);

  function changeMode(next: SecurityMode) {
    setMode(next);
    setSecurityMode(next);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  }

  return (
    <div className="settings-page">
      <div className="container settings-topline"><Link href="/dashboard" className="back-link"><ArrowLeft size={16} /> Back to workspace</Link><span>OG / SETTINGS / SECURITY MODE</span></div>
      <div className="container settings-layout">
        <aside className="settings-sidebar"><div className="settings-index">07</div><p className="eyebrow">Control surface</p><h1>Choose the<br /><em>lens.</em></h1><p>Switch the demonstration between the intentionally vulnerable API experience and a simulated remediated client experience.</p><div className="settings-side-meta"><span><LockKeyhole size={16} /> Local browser setting</span><small>Saved to this device only</small></div></aside>
        <section className="settings-main">
          <div className="settings-heading"><div><p className="eyebrow">DEMONSTRATION CONFIGURATION</p><h2>Security mode</h2><p>Use vulnerable mode to reproduce the assessment findings. Use remediated mode to show the expected client-side guardrails without changing the original backend.</p></div><div className={`mode-status ${mode}`}><i /> {mode === "vulnerable" ? "VULNERABLE" : "REMEDIATED"}</div></div>
          {saved && <div className="settings-saved"><Check size={16} /> Security mode saved for this browser session.</div>}
          <div className="mode-switcher" role="radiogroup" aria-label="Security demonstration mode">
            <button className={`mode-option ${mode === "vulnerable" ? "selected" : ""}`} onClick={() => changeMode("vulnerable")} role="radio" aria-checked={mode === "vulnerable"}><span className="mode-option-top"><span className="mode-option-number">01</span><span className="mode-radio">{mode === "vulnerable" && <i />}</span></span><span className="mode-option-icon mode-icon-alert"><CircleAlert size={22} /></span><strong>Vulnerable mode</strong><p>Keep the assessment findings active so they can be reproduced and captured for evidence.</p><span className="mode-option-detail"><b>OG-001</b> No client throttle <ChevronRight size={14} /><b>OG-002</b> Ownership bypass</span></button>
            <button className={`mode-option ${mode === "remediated" ? "selected" : ""}`} onClick={() => changeMode("remediated")} role="radio" aria-checked={mode === "remediated"}><span className="mode-option-top"><span className="mode-option-number">02</span><span className="mode-radio">{mode === "remediated" && <i />}</span></span><span className="mode-option-icon mode-icon-safe"><ShieldCheck size={22} /></span><strong>Remediated mode</strong><p>Apply a simulated client-side control layer: local attempt throttling and account ownership checks.</p><span className="mode-option-detail"><b>OG-001</b> 5-attempt pause <ChevronRight size={14} /><b>OG-002</b> Ownership enforced</span></button>
          </div>
          <div className="settings-explainer"><div className="settings-explainer-icon"><SlidersHorizontal size={20} /></div><div><p className="eyebrow">HOW THIS WORKS</p><h3>The backend stays inspectable.</h3><p>This toggle changes the frontend demonstration layer only. The companion Express API remains intentionally vulnerable so the original findings can still be reviewed directly with curl. No data is sent outside the local environment.</p></div></div>
          <div className="settings-links"><Link href="/findings"><Gauge size={17} /><span><strong>Open assessment findings</strong><small>Review evidence and remediation notes</small></span><ChevronRight size={17} /></Link><button onClick={() => changeMode("vulnerable")}><RotateCcw size={17} /><span><strong>Reset to vulnerable mode</strong><small>Restore the default coursework view</small></span><ChevronRight size={17} /></button></div>
        </section>
      </div>
    </div>
  );
}
