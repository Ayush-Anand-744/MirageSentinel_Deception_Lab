import { NextRequest, NextResponse } from 'next/server';

const API_URL = (process.env.NEXT_PUBLIC_API_URL || process.env.BACKEND_URL || 'http://backend:3001').replace(/\/$/, '');

type RouteContext = { params: Promise<{ path: string[] }> };

async function proxy(request: NextRequest, context: RouteContext, method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE') {
  const { path } = await context.params;
  const pathString = (path || []).join('/');
  const query = request.nextUrl.searchParams.toString();
  const backendUrl = `${API_URL}/api/${pathString}${query ? `?${query}` : ''}`;

  try {
    const init: RequestInit = {
      method,
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    };

    if (!['GET', 'HEAD'].includes(method)) {
      const text = await request.text();
      if (text) init.body = text;
    }

    const response = await fetch(backendUrl, init);
    const contentType = response.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      return NextResponse.json(await response.json(), { status: response.status });
    }
    return new NextResponse(await response.text(), { status: response.status });
  } catch {
    return NextResponse.json({ success: false, error: 'Backend unavailable', endpoint: `/api/${pathString}` }, { status: 503 });
  }
}

export const GET = (request: NextRequest, context: RouteContext) => proxy(request, context, 'GET');
export const POST = (request: NextRequest, context: RouteContext) => proxy(request, context, 'POST');
export const PUT = (request: NextRequest, context: RouteContext) => proxy(request, context, 'PUT');
export const PATCH = (request: NextRequest, context: RouteContext) => proxy(request, context, 'PATCH');
export const DELETE = (request: NextRequest, context: RouteContext) => proxy(request, context, 'DELETE');
