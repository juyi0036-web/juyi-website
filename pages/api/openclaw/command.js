import { sendCommand } from '../../../lib/openclawClient'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
  const token = process.env.OPENCLAW_ADMIN_TOKEN
  const auth = req.headers.authorization || ''
  if (!token || !auth.startsWith('Bearer ') || auth.slice(7) !== token) {
    return res.status(401).json({ ok: false, code: 'UNAUTHORIZED', error: 'Unauthorized' })
  }
  try {
    const { command, params } = req.body || {}
    if (typeof command !== 'string' || command.length === 0) {
      return res.status(400).json({ error: 'Invalid command' })
    }
    const data = await sendCommand({ command, params })
    return res.status(200).json({ ok: true, data })
  } catch (e) {
    const status = e.status && Number.isInteger(e.status) ? e.status : 502
    const code = e.code || 'OPENCLAW_ERROR'
    return res.status(status).json({ ok: false, code, error: e.message || 'Upstream error', detail: e.body || null })
  }
}
