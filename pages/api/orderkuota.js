import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      status: false,
      message: "Method tidak diizinkan"
    });
  }

  const { service, target, quantity } = req.body;

  if (!service || !target || !quantity) {
    return res.status(400).json({
      status: false,
      message: "Parameter wajib diisi"
    });
  }

  try {
    const response = await axios.post(
      "https://api-shine.vercel.app/orderkuota",
      {
        apikey: "shineshopstore",
        service,
        target,
        quantity
      }
    );

    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Gagal membuat order",
      error: error.response?.data || error.message
    });
  }
}
