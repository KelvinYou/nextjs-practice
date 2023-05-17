import Image from 'next/image'
import Link from 'next/link'

import { projects } from "@/data/data";
import LinkButton from '@/components/projects/LinkButton';
import ProjectCard from '@/components/projects/ProjectCard';

const Projects = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">

          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default Projects;