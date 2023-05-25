"use client"
import { useState } from 'react';

export default function UploadFile() {
  const [selectedFile, setSelectedFile] = useState(null);

  const uploadFile = async (event: any) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        console.log('File uploaded successfully');
        // Perform any additional actions upon successful file upload
      } else {
        console.error('Failed to upload file');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="">
      <input type="file" onChange={uploadFile} />
    </div>
  );
}
