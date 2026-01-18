import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      status: false,
      message: "Method tidak diizinkan"
    });
  }

  const { amount, reference, customer_name } = req.body;

  if (!amount || !reference) {
    return res.status(400).json({
      status: false,
      message: "amount dan reference wajib diisi"
    });
  }

  try {
    const response = await axios.post(
      "https://api-shine.vercel.app/createqris",
      {
        apikey: "shineshopstore",
        amount,
        reference,
        customer_name: customer_name || "Guest"
      }
    );

    return res.status(200).json({
      status: true,
      data: response.data
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Gagal membuat QRIS",
      error: error.response?.data || error.message
    });
  }
}
