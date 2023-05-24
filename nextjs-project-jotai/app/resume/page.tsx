"use client";
import PDFDocument from "@/components/resume/PDFDocument";
import { useDocumentTitle } from "@/hooks";
import ReactPDF from "@react-pdf/renderer";
import React from "react";

const Resume = () => {
  useDocumentTitle("Resume | Kelvin");

  return (
    <>
      <div className="pdf-viewer-container">
        {/* <ReactPDF.PDFViewer className="pdf-viewer">
          <PDFDocument />
        </ReactPDF.PDFViewer> */}
      </div>
    </>
  )
}

export default Resume;