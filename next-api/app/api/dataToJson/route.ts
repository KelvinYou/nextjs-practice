import { promises as fs } from 'fs';
import { cookies } from 'next/headers';

const DATA_FOLDER = './data'; // Folder path to store the data

export async function POST(request: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  const body = await request.json();

  const data = {
    message: 'Hello, Next.js!',
    token: token,
    data: body
  };

  const jsonData = JSON.stringify(data);
  const fileName = `data-${Date.now()}.json`; // Generate a unique filename

  try {
    await fs.mkdir(DATA_FOLDER, { recursive: true }); // Create the folder if it doesn't exist
    await fs.writeFile(`${DATA_FOLDER}/${fileName}`, jsonData); // Write the data to a file
  } catch (error) {
    console.error('Error writing data:', error);
    return new Response('Error writing data', { status: 500 });
  }

  const jsonResponse = JSON.stringify({ success: true, fileName: fileName });

  return new Response(jsonResponse, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': `token=${token}`
    },
  });
}
