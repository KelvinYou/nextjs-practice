import React from "react";

export type Category = 
// frontend
"ReactJS" | "NodeJS" | "ExpressJS" | "NextJS" | "Flutter" |

// backend 
"Spring" | "Firebase" |
// css
"Bootstrap" | "Material UI" | "Tailwind" | "Ant Design";


export type Platform = 
"Web" | "Android" | "IOS" | "Windows" | "Linux" | "MacOS";

export interface Project {
  name: string;
  description: string;
  image_path: string;
  demo_url?: string;
  github_url?: string;
  apk_url?: string;
  category: Category[];
  platform: Platform[];
}