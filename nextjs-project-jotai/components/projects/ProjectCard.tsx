import React, { FC } from "react";
import LinkButton from "./LinkButton";
import { Project } from "@/types/types";

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
        {project.platform.map((platform, techIndex) => (
          <span
            key={techIndex + platform}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {platform}
          </span>
        ))}
        {project.category.map((category, techIndex) => (
          <span
            key={techIndex + category}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {category}
          </span>
        ))}
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.name}</div>
        <p className="text-gray-700 text-base">{project.description}</p>
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
