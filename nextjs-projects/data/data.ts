import React from "react";

export type Category = "react" | "node" | "express" | "django" | "mongo";

interface Project {
  name: string;
  description: string;
  image_path: string;
  demo_url?: string;
  github_url?: string;
  apk_url?: string;
  category: Category[];
  key_techs: string[];
}

export const projects: Project[] = [
  { 
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/assets/images/demo.jpg",
    demo_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
  { 
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.jpg",
    demo_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },
];