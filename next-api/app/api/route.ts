// testing purpose

import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  const data = {
    message: 'Hello, Next.js!',
    token: token,
    param: request.body
  };

  const jsonResponse = JSON.stringify(data);

  return new Response(jsonResponse, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': `token=${token}`
    },
  });
}

export async function POST(request: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  const data = {
    message: 'Hello, Next.js!',
    token: token,
    param: request.body
  };

  const jsonResponse = JSON.stringify(data);

  return new Response(jsonResponse, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': `token=${token}`
    },
  });
}