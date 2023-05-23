import React from "react";

export type ProgrammingTool = 
// frontend
"ReactJS" | "NodeJS" | "NextJS" | "Flutter" | "ViteJS" |

// backend 
"Spring" | "Firebase" | "ExpressJS" | "PuppeteerJS" | 

// css
"Bootstrap" | "Material UI" | "Tailwind CSS" | "Ant Design";




export type Platform = 
"Web" | "Android" | "IOS" | "Windows" | "Linux" | "MacOS";



export interface Project {
  name: string;
  description: string;
  image_path: string;
  demo_url?: string;
  github_url?: string;
  apk_url?: string;
  programmingTool: ProgrammingTool[];
  platform: Platform[];
  updatedDate: string;
}

export const projects: Project[] = [
  { 
    name: "Portfolio v1",
    description:
      "A self-introduction website",
    image_path: "/assets/images/portfolio.jpeg",
    demo_url: "https://kelvinyou.vercel.app/",
    programmingTool: ["ReactJS", "Bootstrap"],
    platform: ["Web"],
    updatedDate: "2023-2-21"
  },
  { 
    name: "Travel Guide: Tour Guide App",
    description:
      "Mobile application created using Flutter with dart as programming language",
    image_path: "/assets/images/demo.jpg",
    github_url: "https://github.com/KelvinYou/fyp_tour_guide_app",
    programmingTool: ["Flutter"],
    platform: ["Android", "IOS"],
    updatedDate: "2023-2-21"
  },
  { 
    name: "Restaurant UI",
    description:
      "Just to build an UI refer from Figma",
    image_path: "/assets/images/demo.jpg",
    demo_url: "https://restaurant-landing-kelvinyou.vercel.app/",
    programmingTool: ["ViteJS", "ReactJS"],
    platform: ["Web"],
    updatedDate: "2023-2-21"
  },
];