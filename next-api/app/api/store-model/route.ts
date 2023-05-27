import { promises as fs, constants as fsConstants } from 'fs';
import { decode } from 'js-base64';
import JSZip from 'jszip';
import path from 'path';
import { decodeBase64ToZip } from "@/utils/compressUtils";
const DATA_FOLDER = './data/model';

export async function POST(request: Request) {
  const body = await request.json();
  const zipBase64 = body.zipBase64;

  // Decode the base64 string to binary data
  const zipData = decode(zipBase64);

  // Create a unique file name
  const fileName = generateFileName();

  // Save the zip file to the DATA_FOLDER
  const filePath = path.join(DATA_FOLDER, `${fileName}.zip`);

  // Create the DATA_FOLDER if it doesn't exist
  await createDirectoryIfNotExists(DATA_FOLDER);

  // Write the zip file
  await decodeBase64ToZip(zipBase64, filePath);
  // await fs.writeFile(filePath, zipData, 'binary');

  // Unzip the file to a folder
  const unzipFolderPath = `${DATA_FOLDER}/${fileName}`;
  await unzipFile(filePath, unzipFolderPath);

  const jsonResponse = JSON.stringify({ success: true, fileName: fileName });

  return new Response(jsonResponse, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

// Function to generate a unique file name
function generateFileName() {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 10);
  return `file_${timestamp}_${randomString}`;
}

async function createDirectoryIfNotExists(directoryPath: string) {
  try {
    await fs.access(directoryPath, fsConstants.F_OK);
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      await fs.mkdir(directoryPath, { recursive: true });
    } else {
      throw error;
    }
  }
}

// Function to unzip a file
async function unzipFile(zipFilePath: string, unzipFolderPath: string) {
  const zip = new JSZip();
  const zipData = await fs.readFile(zipFilePath);
  const loadedZip = await zip.loadAsync(zipData);

  await fs.mkdir(unzipFolderPath, { recursive: true });

  const files = loadedZip.files;
  const promises = Object.keys(files).map(async (fileName) => {
    const fileData = await files[fileName].async('nodebuffer');
    const filePath = `${unzipFolderPath}/${fileName}`;

    await fs.writeFile(filePath, fileData);
  });

  await Promise.all(promises);
}
