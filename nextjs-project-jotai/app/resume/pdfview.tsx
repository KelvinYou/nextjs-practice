
import { PDFViewer } from '@react-pdf/renderer';
import React from 'react'
import { useState, useEffect } from "react";
import PDFDocument from './PDFDocument';

const PdfView = () => {
  // const [client, setClient] = useState(false)

  // useEffect(() => {
  //     setClient(true)
  // }, [])

  return (
    <PDFViewer className="pdf-viewer">
      <PDFDocument />
    </PDFViewer>
  )
}

export default PdfView