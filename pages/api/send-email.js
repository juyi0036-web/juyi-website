export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, data } = req.body;

  // Newsletter subscription (singleton endpoint: type distinguishes flows)
  if (req.body.type === 'newsletter') {
    const { company, email } = req.body;
    if (!company || !email) {
      return res.status(400).json({ error: 'Company and email are required' });
    }
    try {
      const resp = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + process.env.RESEND_API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'contact@juyi-chr.com',
          to: ['contact@juyi-chr.com'],
          subject: `[JUYI CHR] Newsletter Subscription: ${company}`,
          text: `New Newsletter Subscription\nCompany: ${company}\nEmail: ${email}`,
          html: `<div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                   <h2 style="color: #ea580c;">Newsletter Subscription</h2>
                   <p><strong>Company:</strong> ${company}</p>
                   <p><strong>Email:</strong> ${email}</p>
                 </div>`
        })
      });
      if (!resp.ok) throw new Error('Resend failed');
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Newsletter error:', error);
      return res.status(500).json({ error: 'Failed to send subscription email' });
    }
  }

  // Contact inquiry (main flow)
  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ message: 'Missing RESEND_API_KEY' });
  }

  const company = data?.company || 'N/A';
  const phone = data?.phone || 'N/A';
  const category = data?.category || 'N/A';
  const messageText = data?.message || 'N/A';

  // Build HTML manually to avoid parser issues
  let html = '<div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">';
  html += '<h2 style="color: #ea580c; margin-bottom: 20px;">New Lead Generated</h2>';
  html += '<div style="background: #f8fafc; padding: 16px; border-radius: 8px; margin-bottom: 16px;">';
  html += '<p><strong>Name:</strong> ' + (name || 'N/A') + '</p>';
  html += '<p><strong>Email:</strong> ' + (email || 'N/A') + '</p>';
  html += '</div>';
  html += '<div style="background: #f8fafc; padding: 16px; border-radius: 8px;">';
  html += '<h3 style="margin-top: 0;">Consultation Details</h3>';
  html += '<ul style="line-height: 1.8;">';
  html += '<li><strong>Company:</strong> ' + company + '</li>';
  html += '<li><strong>Phone:</strong> ' + phone + '</li>';
  html += '<li><strong>Category:</strong> ' + category + '</li>';
  html += '<li><strong>Message:</strong><br/>' + messageText.replace(/\n/g, '<br/>') + '</li>';
  html += '</ul></div></div>';

  // Build text body
  let text = 'New Lead from Juyi Website\n\n';
  text += 'Name: ' + (name || 'N/A') + '\n';
  text += 'Email: ' + (email || 'N/A') + '\n';
  text += 'Company: ' + company + '\n';
  text += 'Phone: ' + phone + '\n';
  text += 'Category: ' + category + '\n';
  text += 'Message: ' + messageText;

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + process.env.RESEND_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'contact@juyi-chr.com',
        to: ['contact@juyi-chr.com'],
        subject: '[JUYI CHR] New Lead: ' + (name || 'Unknown'),
        text: text,
        html: html
      })
    });

    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}));
      console.error('Resend error:', resp.status, err);
      return res.status(resp.status || 500).json({ message: 'Error', error: err.message || resp.status });
    }

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Error', error: error.message });
  }
}
