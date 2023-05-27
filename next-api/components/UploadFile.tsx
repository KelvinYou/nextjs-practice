"use client"
import { useState } from 'react';
import JSZip from 'jszip';

export default function UploadFile() {
  const [selectedFile, setSelectedFile] = useState(null);

  const uploadFile = async (event: any) => {
    const file = event.target.files[0];
  
    // Create a FileReader object
    const reader = new FileReader();
  
    reader.onload = async () => {
      // Create a new instance of JSZip
      const zip = new JSZip();
  
      // Convert the ArrayBuffer to Uint8Array
      const arrayBuffer = reader.result as ArrayBuffer;
      const uint8Array = new Uint8Array(arrayBuffer);

      // Add the file to the zip
      zip.file(file.name, uint8Array);
  
      // Generate the zip file asynchronously
      const zippedFile = await zip.generateAsync({ type: 'base64' });
  
      // Make the API call to store the zip file
      const response = await fetch('/api/store-model', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ zipBase64: zippedFile }),
      });
  
      // Handle the API response
      if (response.ok) {
        const data = await response.json();
        console.log('API response:', data);
      } else {
        console.error('API error:', response.status);
      }
    };
  
    // Read the selected file
    reader.readAsArrayBuffer(file);
  };
  

  // const uploadFile = async (event: any) => {
  //   const file = event.target.files[0];

  //   console.info("file: " + file);

    // const formData = new FormData();
    // formData.append('file', file);

    // try {
    //   const response = await fetch('/api/upload', {
    //     method: 'POST',
    //     body: formData,
    //   });
    //   if (response.ok) {
    //     console.log('File uploaded successfully');
    //     // Perform any additional actions upon successful file upload
    //   } else {
    //     console.error('Failed to upload file');
    //   }
    // } catch (error) {
    //   console.error('Error uploading file:', error);
    // }
  // };

  return (
    <div className="">
      <input type="file" onChange={uploadFile} />
    </div>
  );
}
