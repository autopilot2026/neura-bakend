import Groq from "groq-sdk";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo non consentito" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Messaggio mancante" });
    }

    const client = new Groq({
      apiKey: process.env.GROQ_API_KEY
    });

    const completion = await client.chat.completions.create({
      model: "mixtral-8x7b-32768",
      messages: [
        {
          role: "system",
          content: "Tu sei NEURA, l’intelligenza avanzata dell’ecosistema AutoPilot 2026."
        },
        {
          role: "user",
          content: message
        }
      ]
    });

    const reply = completion.choices[0].message.content;
    return res.status(200).json({ reply });

  } catch (error) {
    console.error("Errore NEURA:", error);
    return res.status(500).json({ error: error.message || "Errore interno NEURA" });
  }
}
