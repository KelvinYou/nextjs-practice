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
        <p className="text-black text-base mt-4 font-medium">Updated on: {project.updatedDate}</p>
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
