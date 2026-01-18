import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      status: false,
      message: "Method tidak diizinkan"
    });
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      status: false,
      message: "Username dan password wajib diisi"
    });
  }

  try {
    const response = await axios.post(
      "https://api-shine.vercel.app/ceklogin",
      {
        apikey: "shineshopstore",
        username,
        password
      }
    );

    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Login gagal / akun tidak valid",
      error: error.response?.data || error.message
    });
  }
}
