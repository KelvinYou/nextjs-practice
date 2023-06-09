import { projects } from "@/data/data";
import ProjectCard from '@/components/projects/ProjectCard';
import Link from "next/link";

const Projects = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">

          {projects.map((project, index) => (
            <ProjectCard key={index + project.name} project={project} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Projects;