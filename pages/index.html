import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const cekLogin = async () => {
    setLoading(true);
    setResult(null);

    const res = await fetch("/api/cek-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h2>Cek Akun OrderKuota</h2>

      <input
        placeholder="Username OrderKuota"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br /><br />

      <input
        placeholder="Password OrderKuota"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />

      <button onClick={cekLogin} disabled={loading}>
        {loading ? "Memverifikasi..." : "Cek Login"}
      </button>

      {result && (
        <pre style={{ marginTop: 20 }}>
{JSON.stringify(result, null, 2)}
        </pre>
      )}
    </main>
  );
}
