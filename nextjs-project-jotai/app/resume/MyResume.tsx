"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react"


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


export default MyResume