
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import React from 'react'
import { useState, useEffect } from "react";
import PDFDocument from './PDFDocument';

export const PdfDownload = () => {
  return (
    <PDFDownloadLink
      document={<PDFDocument />}
      fileName={`Kelvin You Resume ${new Date()}.pdf`}
    >
    <button className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring mx-2 my-2">
      <span
        className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"
      ></span>

      <span
        className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
      >
        download
      </span>
    </button>
  </PDFDownloadLink>
  )
}


export default PdfDownload