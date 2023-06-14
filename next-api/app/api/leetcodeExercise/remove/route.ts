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
  const { exerciseId } = await request.json();
  const filePath = `${DATA_FOLDER}/${fileName}`;

  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    let existingData: ExerciseData[] = JSON.parse(fileContent) as ExerciseData[];

    // Find the index of the exercise with the given exerciseId
    const exerciseIndex = existingData.findIndex((item) => item.exerciseId === exerciseId);

    if (exerciseIndex !== -1) {
      // Remove the exercise from the existingData array
      existingData.splice(exerciseIndex, 1);

      // Write the updated data back to the file
      await fs.writeFile(filePath, JSON.stringify(existingData, null, 2));

      const jsonResponse = JSON.stringify({ success: true }, null, 2);
      return new Response(jsonResponse, { status: 200, headers: { 'Content-Type': 'application/json' } });
    } else {
      const jsonResponse = JSON.stringify({ success: false, message: 'Exercise not found' }, null, 2);
      return new Response(jsonResponse, { status: 404, headers: { 'Content-Type': 'application/json' } });
    }
  } catch (error) {
    console.error('Error removing data:', error);
    return new Response('Error removing data', { status: 500 });
  }
}