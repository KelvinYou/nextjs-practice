
import { PDFViewer } from '@react-pdf/renderer';
import React from 'react'
import { useState, useEffect } from "react";
import PDFDocument from './PDFDocument';

const PdfView = () => {
  return (
    <PDFViewer className="pdf-viewer">
      <PDFDocument />
    </PDFViewer>
  )
}

export default PdfView