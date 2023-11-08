import PDFDocument from "@/app/resume/PDFDocument";
import ReactPDF, { PDFViewer } from "@react-pdf/renderer";
import dynamic from "next/dynamic";
import React from "react";
import { Document, Page } from "react-pdf";
import MyResume from "./MyResume";

const Resume = () => {

  return (
    <>
      <div className="h-screen">
        <MyResume />
      </div>
    </>
  )
}

export default Resume;