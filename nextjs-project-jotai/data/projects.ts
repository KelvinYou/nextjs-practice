import React from "react";

export type ProgrammingTool = 
// frontend
"ReactJS" | "NodeJS" | "NextJS" | "Flutter" | "ViteJS" |

// backend 
"Spring" | "Firebase" | "ExpressJS" | "PuppeteerJS" | 

// css
"Bootstrap" | "Material UI" | "Tailwind CSS" | "Ant Design" |

// other
"Jupyter Notebook";




export type Platform = 
"Web" | "Android" | "IOS" | "Windows" | "Linux" | "MacOS";



export interface Project {
  name: string;
  description: string;
  image_path: string;
  demo_url?: string;
  github_url?: string;
  apk_url?: string;
  programmingTools?: ProgrammingTool[];
  programmingLanguages?: string[];
  platforms?: Platform[];
  updatedDate: string;
}

export const projects: Project[] = [
  { 
    name: "Portfolio v1",
    description:
      "A self-introduction website",
    image_path: "/assets/images/portfolio.jpeg",
    demo_url: "https://kelvinyou.vercel.app/",
    programmingTools: ["ReactJS", "Bootstrap"],
    platforms: ["Web"],
    updatedDate: "2023-2-14"
  },
  { 
    name: "Travel Guide: Tour Guide App",
    description:
      "Mobile application created using Flutter with dart as programming language",
    image_path: "/assets/images/demo.jpg",
    github_url: "https://github.com/KelvinYou/fyp_tour_guide_app",
    programmingTools: ["Flutter"],
    platforms: ["Android", "IOS"],
    updatedDate: "2022-12-17"
  },
  { 
    name: "Restaurant UI",
    description:
      "Just to build an UI refer from Figma",
    image_path: "/assets/images/restaurant.jpeg",
    demo_url: "https://restaurant-landing-kelvinyou.vercel.app/",
    programmingTools: ["ViteJS", "ReactJS"],
    platforms: ["Web"],
    updatedDate: "2023-2-21"
  },
  { 
    name: "Automated Market-Making System",
    description:
      "An assignment from Blockchain course which to build a liquidity pool using smart contract",
    image_path: "/assets/images/demo.jpg",
    github_url: "https://github.com/KelvinYou/amm-assignment",
    programmingTools: ["ReactJS"],
    programmingLanguages: ["Solitidy"],
    platforms: ["Web"],
    updatedDate: "2023-1-5"
  },
  { 
    name: "Edge Detection System",
    description:
      "An assignment for the Distributed Systems and Parallel Computing course, Detecting edges in images. We also use tools like Threading, Dask, Classified, etc. to speed up the process",
    image_path: "/assets/images/demo.jpg",
    github_url: "https://github.com/KelvinYou/dspc-assignment",
    programmingTools: ["Jupyter Notebook"],
    programmingLanguages: ["Python"],
    updatedDate: "2022-9-23"
  },
  { 
    name: "Donation System",
    description:
      "An assignment for the Data Structures and Algorithms course, create adt using doubly linked list",
    image_path: "/assets/images/demo.jpg",
    github_url: "https://github.com/KelvinYou/dspc-assignment",
    programmingLanguages: ["Java"],
    updatedDate: "2022-9-9"
  },
];