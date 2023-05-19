"use client"
import React from "react";
import { useAtom, useAtomValue } from "jotai";
import { filteredProjectsAtom, inputAtom } from "@/atoms/search-atoms";
import SearchClient from "@/components/search/search-client";
import ProjectsList from "@/components/projects/ProjectsList";
import Link from "next/link";
import { useDocumentTitle } from "@/hooks";



const Projects = () => {
  useDocumentTitle("Projects | Kelvin");
  
  const [inputValue, setInputValue] = useAtom(inputAtom)
  const projects = useAtomValue(filteredProjectsAtom)

  return (
    <main className="">
      <div className="container mx-auto px-4 pt-4">
        <Link 
          className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
          href="/"
        >
          <svg
            className="h-5 w-5 rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>

        <SearchClient inputValue={inputValue} setInputValue={setInputValue} />

        <ProjectsList projects={projects} />
      </div>
      
    </main>
  )
}

export default Projects;