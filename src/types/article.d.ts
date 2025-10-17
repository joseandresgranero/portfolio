import * as React from "react";

export interface IArticle {
  title: string;
  shortTitle?: string;
  description: string;
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
  description: string;
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
