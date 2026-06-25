import { NextRequest, NextResponse } from 'next/server';

const API_URL = (process.env.NEXT_PUBLIC_API_URL || process.env.BACKEND_URL || 'http://backend:3001').replace(/\/$/, '');

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.toString();
  const backendUrl = `${API_URL}/api/dashboard${query ? `?${query}` : ''}`;

  try {
    const response = await fetch(backendUrl, { cache: 'no-store' });
    return NextResponse.json(await response.json(), { status: response.status });
  } catch {
    return NextResponse.json({ success: false, error: 'Backend unavailable', endpoint: '/api/dashboard' }, { status: 503 });
  }
}
