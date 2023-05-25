import { promises as fs } from 'fs';
import { cookies } from 'next/headers';
const DATA_FOLDER = './data';

export async function readData(fileName: string) {
  try {
    const filePath = `${DATA_FOLDER}/${fileName}`;
    const fileData = await fs.readFile(filePath, 'utf8');
    console.info("fileData: " + fileData);
    return fileData;
  } catch (error) {
    console.error('Error reading data:', error);
    throw new Error('Error reading data');
  }
}

export async function POST(request: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  const body = await request.json();

  const fileName = body["fileName"];

  const jsonResponse = await readData(fileName);

  return new Response(jsonResponse, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': `token=${token}`
    },
  });
}
