// 邮件接收API
// 文件: pages/api/email/receive.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message, phone, company } = req.body;

    // 验证输入
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, message' });
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // 创建邮件传输器
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    // 发送确认邮件给客户
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'contact@juyi-chr.com',
      to: email,
      subject: 'Confirmation de votre demande - JUYI CHR',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #667eea;">Bonjour ${name},</h1>
          <p>Nous avons bien reçu votre demande et nous vous répondrons dans les plus brefs délais.</p>
          <p><strong>Sujet:</strong> ${subject || 'Demande de contact'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr>
          <p style="color: #666; font-size: 14px;">
            Cordialement,<br>
            <strong>L'équipe JUYI CHR</strong><br>
            <a href="https://www.juyi-chr.com">www.juyi-chr.com</a>
          </p>
        </div>
      `
    });

    // 发送通知邮件给自己
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'contact@juyi-chr.com',
      to: process.env.EMAIL_TO || 'contact@juyi-chr.com',
      subject: `Nouvelle demande: ${subject || 'Contact'}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>🚨 Nouvelle demande de contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Nom:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
            ${phone ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Téléphone:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>` : ''}
            ${company ? `<tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Entreprise:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${company}</td></tr>` : ''}
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Sujet:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${subject || 'Non spécifié'}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${message}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Date:</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${new Date().toLocaleString('fr-FR')}</td></tr>
          </table>
          <p style="margin-top: 20px;">
            <a href="https://www.juyi-chr.com/admin" style="background: #667eea; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
              Voir dans le tableau de bord
            </a>
          </p>
        </div>
      `
    });

    // 保存到客户数据文件
    const fs = require('fs');
    const path = require('path');
    
    const customerData = {
      id: Date.now(),
      name,
      email,
      phone: phone || '',
      company: company || '',
      subject: subject || 'Contact',
      message,
      date: new Date().toISOString(),
      status: 'new',
      source: 'website'
    };

    const dataDir = path.join(process.cwd(), 'data');
    const customersFile = path.join(dataDir, 'customers.json');

    // 确保data目录存在
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // 读取现有数据
    let customers = [];
    if (fs.existsSync(customersFile)) {
      try {
        const data = fs.readFileSync(customersFile, 'utf8');
        customers = JSON.parse(data);
      } catch (e) {
        console.error('Error reading customers file:', e);
      }
    }

    // 添加新客户
    customers.push(customerData);

    // 保存数据
    fs.writeFileSync(customersFile, JSON.stringify(customers, null, 2));

    console.log('New customer inquiry saved:', customerData);

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      customer_id: customerData.id
    });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}