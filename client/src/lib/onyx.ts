/* Quiet Signal reminder: warm paper, ink, oxide lime, editorial asymmetry, signal rails, calm motion. */

export const API_BASE = "";
export const logoUrl = "/onyx-mark.png";
export type SecurityMode = "vulnerable" | "remediated";
export const SECURITY_MODE_KEY = "onyx_security_mode";

export function getSecurityMode(): SecurityMode {
  try {
    return localStorage.getItem(SECURITY_MODE_KEY) === "remediated" ? "remediated" : "vulnerable";
  } catch {
    return "vulnerable";
  }
}

export function setSecurityMode(mode: SecurityMode) {
  localStorage.setItem(SECURITY_MODE_KEY, mode);
  window.dispatchEvent(new CustomEvent("onyx-security-mode", { detail: mode }));
}

export type Session = {
  token: string;
  userId: number;
  username: string;
};

export type Account = {
  name: string;
  username: string;
  accountNumber: string;
  balance: number;
  email: string;
};

export type AccountResponse = {
  finding?: string;
  accessedByUserId?: number;
  account: Account;
};

export const demoTransactions = [
  { id: "TX-9031", title: "Brightline Market", meta: "Today · Card payment", amount: -84.2, tone: "clay" },
  { id: "TX-9028", title: "Maya Osei", meta: "Yesterday · Received", amount: 240, tone: "lime" },
  { id: "TX-9017", title: "Kora Studio", meta: "18 Aug · Business payment", amount: -310, tone: "cobalt" },
  { id: "TX-9003", title: "Onyx transfer", meta: "15 Aug · To savings", amount: -150, tone: "ink" },
];

export function getSession(): Session | null {
  try {
    const value = localStorage.getItem("onyx_session");
    return value ? JSON.parse(value) as Session : null;
  } catch {
    return null;
  }
}

export function saveSession(session: Session) {
  localStorage.setItem("onyx_session", JSON.stringify(session));
}

export function clearSession() {
  localStorage.removeItem("onyx_session");
}

export async function login(username: string, password: string): Promise<Session> {
  const response = await fetch(`${API_BASE}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.error || "The simulated login was not accepted.");
  }
  return { token: body.token, userId: body.userId, username };
}

export async function fetchAccount(id: string | number, token: string): Promise<AccountResponse> {
  const response = await fetch(`${API_BASE}/api/account/${id}`, {
    headers: { Authorization: token },
  });
  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.error || "Account information could not be retrieved.");
  }
  return body as AccountResponse;
}

export function formatMoney(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GHS",
    minimumFractionDigits: 2,
  }).format(value).replace("GHS", "GH₵");
}
