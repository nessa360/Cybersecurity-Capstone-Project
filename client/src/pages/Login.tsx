/* Quiet Signal reminder: warm paper, ink, oxide lime, editorial asymmetry, signal rails, calm motion. */
import { FormEvent, useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowLeft, ArrowUpRight, Check, CircleAlert, Eye, EyeOff, LockKeyhole, Server, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSecurityMode, login, saveSession } from "@/lib/onyx";

export default function Login({ onSession }: { onSession: (session: { token: string; userId: number; username: string }) => void }) {
  const [, navigate] = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
  const [message, setMessage] = useState("");

  function useDemoCredentials() {
    setUsername("akosua");
    setPassword("password123");
    setMessage("Fictional demo credentials loaded. Nothing has been submitted yet.");
    setStatus("success");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (getSecurityMode() === "remediated") {
      const attempts = Number(localStorage.getItem("onyx_remediated_login_attempts") || "0");
      if (attempts >= 5) {
        setStatus("error");
        setMessage("Remediated mode paused this sign-in after five failed attempts. Reset the mode in Settings to continue the demonstration.");
        return;
      }
    }
    setStatus("loading");
    setMessage("");
    try {
      const session = await login(username, password);
      saveSession(session);
      localStorage.removeItem("onyx_remediated_login_attempts");
      onSession(session);
      setStatus("success");
      setMessage("Simulated login accepted. Opening your workspace…");
      window.setTimeout(() => navigate("/dashboard"), 260);
    } catch (error) {
      if (getSecurityMode() === "remediated") {
        const attempts = Number(localStorage.getItem("onyx_remediated_login_attempts") || "0") + 1;
        localStorage.setItem("onyx_remediated_login_attempts", String(attempts));
      }
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "The local API could not accept this request.");
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-aside">
        <Link href="/" className="back-link"><ArrowLeft size={16} /> Back to Onyx Global</Link>
        <div className="auth-aside-content">
          <span className="auth-kicker">OG / LOCAL WORKSPACE</span>
          <h1>Welcome back to a clearer view.</h1>
          <p>Log in to the fictional Onyx Global workspace and explore the account flows used in this authorized assessment.</p>
          <div className="auth-aside-meta"><div><ShieldCheck size={16} /> Loopback connected</div><div><LockKeyhole size={16} /> Simulated credentials only</div></div>
        </div>
        <div className="auth-aside-footer"><span>01 / 05</span><span>AUTHENTICATION LAYER</span></div>
      </div>
      <div className="auth-form-wrap">
        <div className="auth-form-card">
          <div className="auth-form-heading"><span className="form-step">01</span><div><p className="eyebrow">Access your workspace</p><h2>Log in</h2></div></div>
          <div className="demo-callout"><div className="demo-callout-icon"><Server size={17} /></div><div><strong>Local simulation</strong><span>Connects to <code>127.0.0.1:3000</code> only.</span></div></div>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-field"><label htmlFor="username">Username or email</label><input id="username" name="username" autoComplete="username" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="e.g. akosua" required /></div>
            <div className="form-field"><div className="field-label-row"><label htmlFor="password">Password</label><button type="button" className="forgot-button" onClick={() => setMessage("Password recovery is not connected in this fictional assessment environment.")}>Forgot password?</button></div><div className="password-wrap"><input id="password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter demo password" required /><button type="button" className="password-toggle" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></div></div>
            {message && <div className={`form-message ${status === "error" ? "form-message-error" : "form-message-success"}`} role="status">{status === "error" ? <CircleAlert size={17} /> : <Check size={17} />}{message}</div>}
            <Button type="submit" className="submit-button" disabled={status === "loading"}>{status === "loading" ? "Connecting…" : "Log in to workspace"}<ArrowUpRight size={17} /></Button>
          </form>
          <button className="demo-credentials-button" onClick={useDemoCredentials}>Use fictional demo credentials <ArrowUpRight size={15} /></button>
          <p className="auth-small-print">No real credentials are collected. This interface is part of a local, intentionally vulnerable security assessment environment.</p>
          <div className="auth-signup">New to the simulation? <button onClick={() => setMessage("Account creation is not connected in this coursework demo.")}>Create a fictional account</button></div>
        </div>
      </div>
    </div>
  );
}
