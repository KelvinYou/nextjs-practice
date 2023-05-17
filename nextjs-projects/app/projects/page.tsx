import Image from 'next/image'
import Link from 'next/link'

import { projects } from "@/data/data";
import LinkButton from '@/components/projects/LinkButton';

const Projects = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">

          {projects.map((project, index) => (
            <div key={index + project.name} className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-4">
              <div className="w-full" style={{ height: "200px" }}>
                <img className="object-cover w-full h-full" src="/assets/images/demo.jpg" alt={project.name}/>
              </div>
              <div className="px-6 pt-4 pb-2">
                {project.key_techs.map((tech, techIndex) => (
                  <span key={techIndex + tech} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{project.name}</div>
                <p className="text-gray-700 text-base">
                  {project.description}
                </p>
              </div>

              <div className="px-6 pb-4 flex flex-wrap justify-center">
                {project.demo_url && 
                  <LinkButton url={project.demo_url} name={"Demo"}/>
                }
                {project.github_url && 
                  <LinkButton url={project.github_url} name={"Github"}/>
                }
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Projects;