export default async function handler(req, res) {
  try {
    // Messaggio ricevuto dal frontend
    const userMessage = req.body?.message || "Nessun messaggio ricevuto";

    // Risposta base di NEURA (per testare che tutto funzioni)
    const reply = `NEURA è attiva. Hai scritto: "${userMessage}"`;

    // Risposta al frontend
    res.status(200).json({
      success: true,
      reply: reply
    });

  } catch (error) {
    console.error("Errore NEURA:", error);
    res.status(500).json({
      success: false,
      error: "Errore interno del server"
    });
  }
}
