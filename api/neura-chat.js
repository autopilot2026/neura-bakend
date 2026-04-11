import Groq from "groq-sdk";

const client = new Groq({ apiKey: process.env.GROQ_API_KEY });

export default async function handler(req, res) {
  try {
    const { message } = req.body;

    const completion = await client.chat.completions.create({
      model: "mixtral-8x7b-32768",
      messages: [
        {
          role: "system",
          content: "Tu sei NEURA, l’intelligenza avanzata dell’ecosistema AutoPilot 2026. Rispondi in modo naturale, umano, preciso, seguendo tutte le direttive del progetto."
        },
        {
          role: "user",
          content: message
        }
      ]
    });

    const reply = completion.choices[0].message.content;
    res.status(200).json({ reply });

  } catch (error) {
    console.error("Errore NEURA:", error);
    res.status(500).json({ error: "Errore interno NEURA" });
  }
}
