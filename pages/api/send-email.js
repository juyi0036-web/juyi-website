import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, data } = req.body;

  // Check for environment variables
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('Missing SMTP environment variables');
    return res.status(500).json({ 
      message: 'Server configuration error: Missing SMTP credentials. Please configure SMTP_HOST, SMTP_USER, and SMTP_PASS in your environment variables.' 
    });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: '79745983@qq.com',
      subject: `New Lead from Juyi Website: ${name}`,
      text: `
        New Lead Details:
        Name: ${name}
        Email: ${email}
        Category: ${data.category}
        Profile: ${data.profile || 'N/A'}
        Customization: ${data.customization || 'N/A'}
      `,
      html: `
        <h3>New Lead Generated</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr/>
        <h4>Consultation Details:</h4>
        <ul>
          <li><strong>Category:</strong> ${data.category}</li>
          <li><strong>Profile:</strong> ${data.profile || 'N/A'}</li>
          <li><strong>Customization:</strong> ${data.customization || 'N/A'}</li>
        </ul>
      `,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ message: 'Error sending email', error: error.message });
  }
}
