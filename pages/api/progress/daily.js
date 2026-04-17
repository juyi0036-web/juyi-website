// 每日进度汇报API
// 文件: pages/api/progress/daily.js

import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 读取客户数据
    const dataDir = path.join(process.cwd(), 'data');
    const customersFile = path.join(dataDir, 'customers.json');
    
    let customers = [];
    if (fs.existsSync(customersFile)) {
      try {
        const data = fs.readFileSync(customersFile, 'utf8');
        customers = JSON.parse(data);
      } catch (e) {
        console.error('Error reading customers file:', e);
      }
    }

    // 统计今日数据
    const today = new Date().toISOString().split('T')[0];
    const todayCustomers = customers.filter(c => 
      c.date.startsWith(today)
    );

    // 统计状态
    const newCount = todayCustomers.filter(c => c.status === 'new').length;
    const repliedCount = todayCustomers.filter(c => c.status === 'replied').length;
    const closedCount = todayCustomers.filter(c => c.status === 'closed').length;

    // 生成汇报
    const report = {
      date: today,
      timestamp: new Date().toISOString(),
      summary: {
        totalInquiries: todayCustomers.length,
        newInquiries: newCount,
        replied: repliedCount,
        closed: closedCount,
        pending: newCount
      },
      details: todayCustomers.map(c => ({
        id: c.id,
        name: c.name,
        email: c.email,
        subject: c.subject,
        time: new Date(c.date).toLocaleTimeString('fr-FR'),
        status: c.status
      })),
      nextSteps: [
        `回复 ${newCount} 个新咨询`,
        '更新客户状态',
        '优化SEO内容',
        '检查邮件系统'
      ],
      seoProgress: {
        status: '进行中',
        tasks: [
          'SEO组件创建完成',
          '结构化数据添加',
          '页面标题优化'
        ]
      }
    };

    // 如果是POST请求，可以更新状态
    if (req.method === 'POST' && req.body.updateStatus) {
      const { customerId, newStatus } = req.body;
      const customerIndex = customers.findIndex(c => c.id === customerId);
      if (customerIndex !== -1) {
        customers[customerIndex].status = newStatus;
        fs.writeFileSync(customersFile, JSON.stringify(customers, null, 2));
      }
    }

    res.status(200).json(report);
  } catch (error) {
    console.error('Progress report error:', error);
    res.status(500).json({ error: 'Failed to generate report' });
  }
}