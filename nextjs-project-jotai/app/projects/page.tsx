"use client"
import React from "react";
import { useAtom, useAtomValue } from "jotai";
import { filteredProjectsAtom, inputAtom } from "@/atoms/search-atoms";
import SearchClient from "@/components/search/search-client";
import ProjectsList from "@/components/projects/ProjectsList";

const Projects = () => {
  const [inputValue, setInputValue] = useAtom(inputAtom)
  const projects = useAtomValue(filteredProjectsAtom)

  return (
    <main className="">
      Projects
      <SearchClient inputValue={inputValue} setInputValue={setInputValue} />

      <ProjectsList projects={projects} />
    </main>
  )
}

export default Projects;