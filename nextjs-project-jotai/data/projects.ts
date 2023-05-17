import { Project } from "@/types/types";
import React from "react";

export const projects: Project[] = [
  { 
    name: "Portfolio v1",
    description:
      "A self-introduction website",
    image_path: "/assets/images/portfolio.jpeg",
    demo_url: "https://kelvinyou.vercel.app/",
    category: ["ReactJS", "Bootstrap"],
    platform: ["Web"],
  },
  { 
    name: "Travel Guide: Tour Guide App",
    description:
      "Mobile application created using Flutter with dart as programming language",
    image_path: "/assets/images/demo.jpg",
    github_url: "https://github.com/KelvinYou/fyp_tour_guide_app",
    category: ["Flutter"],
    platform: ["Android", "IOS"],
  },
  { 
    name: "Restaurant UI",
    description:
      "Just to build an UI refer from Figma",
    image_path: "/assets/images/demo.jpg",
    demo_url: "https://restaurant-landing-kelvinyou.vercel.app/",
    category: ["Flutter"],
    platform: ["Web"],
  },
];