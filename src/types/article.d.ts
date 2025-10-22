import * as React from "react";

export interface IArticle {
  title: string;
  cat: string[];
  shortTitle?: string;
  description: React.ReactNode;
  role: string;
  image: string;
  imageAlt: string;
  imageHeight?: number;
  imageWidth?: number;
  githubLink?: string;
  storybookLink?: string;
  figmaLink?: string;
  slug: string;
  tags?: string[];
  content?: () => React.ReactNode;
}

export interface ArticleCardProps {
  title: string;
  featured?: boolean;
  description: React.ReactNode;
  image: string;
  imageAlt: string;
  imageHeight?: number;
  imageWidth?: number;
  githubLink?: string;
  storybookLink?: string;
  figmaLink?: string;
  slug: string;
  tags?: string[];
}
