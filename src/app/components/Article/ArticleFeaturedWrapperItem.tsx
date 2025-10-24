import * as React from "react";
import { ArticleSectionProps } from "./ArticleSection";
import { ArticleHeading } from "./ArticleHeading";
import { ArticleParagraph } from "./ArticleParagraph";

export interface ArticleFeaturedWrapperItemProps
  extends Pick<ArticleSectionProps, "children" | "heading"> {}

export const ArticleFeaturedWrapperItem: React.FC<
  ArticleFeaturedWrapperItemProps
> = ({ children, heading }) => {
  return (
    <ArticleParagraph htmlTag="div">
      <ArticleHeading inverted size="h3">
        {heading}
      </ArticleHeading>
      {children}
    </ArticleParagraph>
  );
};
