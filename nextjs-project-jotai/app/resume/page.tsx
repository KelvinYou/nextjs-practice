"use client"
import PDFDocument from "@/components/PDFDocument";
import ReactPDF from "@react-pdf/renderer";
import React from "react";

const Resume = () => {
  return (
    <>
      <div className="pdf-viewer-container">
        <ReactPDF.PDFViewer className="pdf-viewer">
          <PDFDocument />
        </ReactPDF.PDFViewer>
      </div>

      {/* <PDFDownloadLink document={<PDFDocument />} fileName="example.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Generating PDF...' : 'Download PDF'
        }
      </PDFDownloadLink> */}
    </>
  )
}

export default Resume;