import React, { FC } from "react";
import LinkButton from "./LinkButton";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-4">
      <div className="w-full" style={{ height: "200px" }}>
        <img
          className="object-cover w-full h-full"
          src={project.image_path}
          alt={project.name}
        />
      </div>
      <div className="px-6 pt-4 pb-2">
        {project.platforms && 
        project.platforms.map((platform, techIndex) => (
          <span
            key={techIndex + platform}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {platform}
          </span>
        ))}
        {project.programmingTools && 
        project.programmingTools.map((programmingTool, techIndex) => (
          <span
            key={techIndex + programmingTool}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {programmingTool}
          </span>
        ))}
        {project.programmingLanguages && 
        project.programmingLanguages.map((programmingLanguage, techIndex) => (
          <span
            key={techIndex + programmingLanguage}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {programmingLanguage}
          </span>
        ))}
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.name}</div>
        <p className="text-gray-700 text-base">{project.description}</p>
        <div className="flex items-center gap-1 text-gray-500 mt-5">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>

          <p className="text-sm font-semibold text-black">{project.updatedDate}</p>
        </div>
      </div>

      <div className="px-6 pb-4 flex flex-wrap justify-center">
        {project.demo_url && <LinkButton url={project.demo_url} name={"Demo"} />}
        {project.github_url && (
          <LinkButton url={project.github_url} name={"Github"} />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
