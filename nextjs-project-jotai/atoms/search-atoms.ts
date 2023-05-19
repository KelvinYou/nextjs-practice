import { projects } from "@/data/projects";
import { Project } from "@/data/projects";
import { atom } from "jotai"

export const inputAtom = atom<string>("")
export const projectsServerAtom = atom<Project[]>([])
const projectsAtom = atom<Project[]>(projects)

export const filteredProjectsAtom = atom((get) => {
  const inputValue = get(inputAtom)
  // If there is no input value, return all movies
  if (!inputValue) return get(projectsAtom)


  // If there is an input value, filter projects by title
  return get(projectsAtom).filter((project) =>
    `${project.name}, ${project.category.join(", ")}, ${project.platform.join(", ")}`
    .toLowerCase().includes(inputValue.toLowerCase())
  )
})
