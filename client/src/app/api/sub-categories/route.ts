import client from '@/api/client';
import { NextRequest, NextResponse } from 'next/server';
import { AxiosError } from 'axios';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.search;

  try {
    const response = await client.get(`/api/sub-categories${searchParams}`);

    return NextResponse.json(response.data, {
      status: response.status,
    });
  } catch (err) {
    const error = err as AxiosError;

    const statusCode = error.response?.status || 500;
    const errorMessage =
      (error.response?.data as string) || error.message || 'Unknown error';

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
