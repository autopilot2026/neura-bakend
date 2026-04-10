export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo non consentito" });
  }

  try {
    const { message } = req.body;

    return res.status(200).json({
      reply: "NEURA è collegata correttamente al backend!",
      echo: message
    });

  } catch (error) {
    return res.status(500).json({ error: "Errore interno del server" });
  }
}
