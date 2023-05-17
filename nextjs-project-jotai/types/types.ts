import React from "react";

export type Category = "react" | "node" | "express" | "django" | "mongo";

export interface Project {
  name: string;
  description: string;
  image_path: string;
  demo_url?: string;
  github_url?: string;
  apk_url?: string;
  category: Category[];
  key_techs: string[];
}