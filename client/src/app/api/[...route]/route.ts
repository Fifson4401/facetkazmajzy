import client from '@/api/client';
import { AxiosError } from 'axios';
import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { route: string[] } }
) {
  // Odtwórz ścieżkę API z parametrów trasy
  const apiPath = `api/${params.route.join('/')}`;

  // Pobierz parametry zapytania
  const searchParams = request.nextUrl.search;

  // Połącz ścieżkę z parametrami zapytania
  const fullUrl = `${apiPath}${searchParams}`;

  try {
    // Wykonaj żądanie do API
    const response = await client.get(fullUrl);

    // Zwróć odpowiedź
    return new Response(JSON.stringify(response.data), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    const error = err as AxiosError;

    const statusCode = error.response?.status || 500;
    const errorMessage =
      (error.response?.data as string) || error.message || 'Unknown error';

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: statusCode,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
