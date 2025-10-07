import * as React from "react";
import { ArticleHeading } from "./ArticleHeading";
import { ArticleSection } from "./ArticleSection";

export const ArticleRole = ({ children }: { children: React.ReactNode }) => {
  return <ArticleSection heading="My Role">{children}</ArticleSection>;
};
