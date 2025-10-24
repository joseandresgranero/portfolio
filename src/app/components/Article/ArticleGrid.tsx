import * as React from "react";
import { ArticleSectionProps } from "./ArticleSection";

export interface ArticleGridProps
  extends Pick<ArticleSectionProps, "children"> {
  columns?: 1 | 2 | 3 | 4;
}

export const ArticleGrid: React.FC<ArticleGridProps> = ({
  children,
  columns = 2,
}) => {
  const columnClassName =
    columns === 4
      ? "xl:grid-cols-3 lg:grid-cols-2 grid-cols-1"
      : columns === 3
      ? "xl:grid-cols-3 lg:grid-cols-2 grid-cols-1"
      : columns === 2
      ? "lg:grid-cols-2 grid-cols-1"
      : "grid-cols-1";
  return (
    <div
      className={`grid grid-container items-stretch gap-8 md:gap-16 p-0 mb-15 last-of-type:mb-0 ${columnClassName}`}
    >
      {children}
    </div>
  );
};
