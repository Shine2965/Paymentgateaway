import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // order
  const [service, setService] = useState("");
  const [target, setTarget] = useState("");
  const [quantity, setQuantity] = useState("");

  // qris
  const [amount, setAmount] = useState("");
  const [reference, setReference] = useState("");

  const callAPI = async (url, body = null) => {
    setLoading(true);
    setResult(null);

    const res = await fetch(url, {
      method: body ? "POST" : "GET",
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : null
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <main style={{ padding: 40, fontFamily: "Arial", maxWidth: 700 }}>
      <h1>Shine Shop – OrderKuota Panel</h1>

      <hr />

      <h3>🔐 Cek Login OrderKuota</h3>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <br /><br />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <br /><br />
      <button onClick={() => callAPI("/api/cek-login", { username, password })}>
        Cek Login
      </button>

      <hr />

      <h3>🔑 Cek Token / Akun</h3>
      <button onClick={() => callAPI("/api/cek-token")}>
        Cek Akun
      </button>

      <hr />

      <h3>📦 Order Kuota</h3>
      <input placeholder="Service ID" onChange={e => setService(e.target.value)} />
      <br /><br />
      <input placeholder="Target" onChange={e => setTarget(e.target.value)} />
      <br /><br />
      <input placeholder="Quantity" type="number" onChange={e => setQuantity(e.target.value)} />
      <br /><br />
      <button onClick={() =>
        callAPI("/api/orderkuota", { service, target, quantity })
      }>
        Buat Order
      </button>

      <hr />

      <h3>💳 Create QRIS</h3>
      <input placeholder="Nominal" type="number" onChange={e => setAmount(e.target.value)} />
      <br /><br />
      <input placeholder="Reference / Order ID" onChange={e => setReference(e.target.value)} />
      <br /><br />
      <button onClick={() =>
        callAPI("/api/create-qris", {
          amount,
          reference,
          customer_name: "Shine Shop"
        })
      }>
        Create QRIS
      </button>

      <hr />

      {loading && <p>⏳ Memproses...</p>}

      {result && (
        <>
          <h3>📄 Response</h3>
          <pre style={{
            background: "#111",
            color: "#0f0",
            padding: 15,
            overflowX: "auto"
          }}>
{JSON.stringify(result, null, 2)}
          </pre>
        </>
      )}
    </main>
  );
}
