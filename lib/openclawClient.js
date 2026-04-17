const DEFAULT_TIMEOUT_MS = 15000

function getEnv(name, def) {
  const v = process.env[name]
  return typeof v === 'string' && v.length > 0 ? v : def
}

const BASE_URL = getEnv('OPENCLAW_API_BASE', '')
const API_KEY = getEnv('OPENCLAW_API_KEY', '')
const COMMAND_PATH = getEnv('OPENCLAW_COMMAND_PATH', '/v1/commands')

async function withTimeout(promise, ms) {
  const ac = new AbortController()
  const t = setTimeout(() => ac.abort(), ms)
  try {
    return await promise(ac.signal)
  } finally {
    clearTimeout(t)
  }
}

async function sendCommand({ command, params, timeoutMs }) {
  if (!BASE_URL || !API_KEY) {
    const err = new Error('OpenClaw environment not configured')
    err.code = 'OPENCLAW_CONFIG_MISSING'
    throw err
  }
  const url = new URL(COMMAND_PATH, BASE_URL).toString()
  const body = { command, params: params || {} }
  const doFetch = async (signal) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(body),
      signal,
    })
    const text = await res.text()
    let json
    try {
      json = text ? JSON.parse(text) : null
    } catch (_) {
      json = null
    }
    if (!res.ok) {
      const e = new Error('OpenClaw request failed')
      e.status = res.status
      e.body = json || text
      throw e
    }
    return json
  }
  return withTimeout(doFetch, Math.max(1000, timeoutMs || DEFAULT_TIMEOUT_MS))
}

module.exports = {
  sendCommand,
}
