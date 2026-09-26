import express from "express";

/*
 * ONYX GLOBAL — INTENTIONALLY VULNERABLE ASSESSMENT API
 *
 * This loopback/serverless API is for the coursework lab. It deliberately
 * retains OG-001 (no login throttling), OG-002 (BOLA/IDOR), and OG-003
 * (excessive data exposure).
 */

const users = [
  {
    id: 1,
    username: "akosua",
    password: "password123",
    name: "Akosua Mensah",
    email: "akosua@example.test",
    balance: 2450.75,
    accountNumber: "OG-0001-TEST",
  },
  {
    id: 2,
    username: "kwame",
    password: "kwame123",
    name: "Kwame Asante",
    email: "kwame@example.test",
    balance: 8175.2,
    accountNumber: "OG-0002-TEST",
  },
];

const sessions = new Map<string, number>();
let failedAttempts = 0;

const app = express();
app.use(express.json());

// OG-001 — intentionally no rate limit, delay, CAPTCHA, or lockout.
app.post("/api/login", (req, res) => {
  const { username, password } = req.body ?? {};
  const user = users.find(
    (candidate) => candidate.username === username && candidate.password === password,
  );

  if (!user) {
    failedAttempts += 1;
    return res.status(401).json({
      success: false,
      error: "Invalid username or password",
      finding: "OG-001",
      failedAttempts,
    });
  }

  const token = `tok_${user.id}_${Date.now()}`;
  sessions.set(token, user.id);
  return res.json({ success: true, token, userId: user.id, username: user.username });
});

// OG-002 — intentionally validates the token but not ownership of :id.
app.get("/api/account/:id", (req, res) => {
  const token = req.headers.authorization;
  const authenticatedUserId = token ? sessions.get(token) : undefined;
  if (!authenticatedUserId) {
    return res.status(401).json({ success: false, error: "Authentication required" });
  }

  const user = users.find((candidate) => candidate.id === Number(req.params.id));
  if (!user) {
    return res.status(404).json({ success: false, error: "Account not found" });
  }

  return res.json({
    success: true,
    finding: "OG-002",
    accessedByUserId: authenticatedUserId,
    account: {
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      balance: user.balance,
      accountNumber: user.accountNumber,
    },
  });
});

// OG-003 — intentionally exposes fields not required by a profile view.
app.get("/api/customer/:id/profile", (req, res) => {
  const user = users.find((candidate) => candidate.id === Number(req.params.id));
  if (!user) {
    return res.status(404).json({ success: false, error: "Customer not found" });
  }

  return res.json({
    success: true,
    finding: "OG-003",
    customer: {
      id: user.id,
      username: user.username,
      name: user.name,
      email: user.email,
      balance: user.balance,
      accountNumber: user.accountNumber,
      password: user.password,
      accountStatus: "ACTIVE",
      internalCustomerType: "STANDARD",
    },
  });
});

app.get("/api/reset-attempts", (_req, res) => {
  failedAttempts = 0;
  sessions.clear();
  return res.json({ success: true, message: "Lab state reset" });
});

app.get("/api/health", (_req, res) => {
  return res.json({ status: "ok", environment: "Onyx Global Vulnerability Assessment Lab" });
});

export default app;
