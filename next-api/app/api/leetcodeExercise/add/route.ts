import { promises as fs } from 'fs';
import { cookies } from 'next/headers';

const DATA_FOLDER = './data/leetcode'; // Folder path to store the data
const fileName = `exercises.json`; // Generate a unique filename

interface ExerciseData {
  exerciseId: number;
  title: string;
  description: string;
  modifiedDate: Date;
}

export async function POST(request: Request) {
  const body = await request.json();

  const { exerciseId, title, description } = body;
  const data: ExerciseData = {
    exerciseId,
    title,
    description,
    modifiedDate: new Date(),
  };

  console.info(data);

  try {
    await fs.mkdir(DATA_FOLDER, { recursive: true }); // Create the folder if it doesn't exist

    // Check if the file already exists
    const filePath = `${DATA_FOLDER}/${fileName}`;

    let existingData: ExerciseData[] = [];

    try {
      const fileContent = await fs.readFile(filePath, 'utf8');
      existingData = JSON.parse(fileContent) as ExerciseData[];
      if (!Array.isArray(existingData)) {
        existingData = [];
      }
    } catch (error) {
      // File doesn't exist or failed to read, existingData remains an empty array
    }

    // Check if the exerciseId already exists in the file
    const existingIndex = existingData.findIndex((item) => item.exerciseId === exerciseId);

    if (existingIndex !== -1) {
      // ExerciseId already exists, replace the existing data
      existingData[existingIndex] = data;
    } else {
      // ExerciseId doesn't exist, add new data
      existingData.push(data);
    }

    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2)); // Write the updated data to the file
  } catch (error) {
    console.error('Error writing data:', error);
    return new Response('Error writing data', { status: 500 });
  }

  const jsonResponse = JSON.stringify({ success: true, data: data }, null, 2);

  return new Response(jsonResponse, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
