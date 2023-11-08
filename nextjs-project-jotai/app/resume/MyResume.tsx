"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react"
import PDFDocument from "./PDFDocument";


const MyResume = () => {
  const Resume = dynamic(() => import("./pdfview"), {
    ssr: false,
  });

  // const [client, setClient] = useState(false)

  // useEffect(() => {
  //     setClient(true)
  // }, [])

  return(
    <Resume />
  )
}

export const DownloadPdfButton = () => {
  const Download = dynamic(() => import("./pdfdownload"), {
    ssr: false,
  });

  return (
    <Download />
  )
}


export default MyResume