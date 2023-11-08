"use client"

import React from "react";
import MyResume, { DownloadPdfButton } from "./MyResume";

const Resume = () => {
  return (
    <>
      <div className="h-[80px]">
        <DownloadPdfButton />
      </div>
      <div className="h-[calc(100vh-80px)]">
        <MyResume />
      </div>
    </>
  )
}

export default Resume;