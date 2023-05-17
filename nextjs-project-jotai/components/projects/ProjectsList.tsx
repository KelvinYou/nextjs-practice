import { Project } from "@/types/types"

import ProjectCard from "./ProjectCard"

const ProjectsList = ({
  projects,
  isHandling = false,
}: {
  projects: Project[]
  isHandling?: boolean
}) => {
  return (
    <div className="flex flex-wrap justify-center">
      {!isHandling ? (
        projects.length > 0 ? (
          projects?.map((project, index) => 
          <ProjectCard key={index + project.name} project={project} 
          />)
        ) : (
          <div>No result found for this query.</div>
        )
      ) : (
        <div>Searching...</div>
      )}
    </div>
  )
}

export default ProjectsList
