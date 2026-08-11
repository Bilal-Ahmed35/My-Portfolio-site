export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body || {};

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Missing RESEND_API_KEY on server" });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "bilalahmedshah35@gmail.com",
        reply_to: email,
        subject: `New contact form message from ${name || "Visitor"}`,
        html: `
          <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #111827;">
            <h2 style="margin: 0 0 12px; font-size: 20px; color: #111827;">New message from your portfolio contact form</h2>
            <p style="margin: 0 0 8px;"><strong>Name:</strong> ${name || "(not provided)"}</p>
            <p style="margin: 0 0 8px;"><strong>Email:</strong> ${email || "(not provided)"}</p>
            <p style="margin: 16px 0 8px;"><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; margin: 0;">${
              message || "(no message provided)"
            }</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Resend API error", response.status, text);
      return res.status(502).json({ error: "Failed to send email via Resend" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Server error while calling Resend", err);
    return res.status(500).json({ error: "Unexpected server error" });
  }
}
