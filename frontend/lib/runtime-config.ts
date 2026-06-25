export function getApiBaseUrl(): string {
  return (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '')
}

export function getBrowserApiBaseUrl(): string {
  if (typeof window === 'undefined') return getApiBaseUrl()
  return getApiBaseUrl() || window.location.origin
}

export function getHealthUrl(): string {
  const base = getBrowserApiBaseUrl()
  return `${base}/health`
}

export function getWebSocketUrl(): string {
  if (typeof window === 'undefined') return ''
  const configured = getApiBaseUrl()
  if (configured) {
    return `${configured.replace(/^http:/, 'ws:').replace(/^https:/, 'wss:')}/ws`
  }
  const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:'
  return `${protocol}//${window.location.host}/ws`
}
