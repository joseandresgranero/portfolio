import * as React from "react";
import { ArticleSection, ArticleSectionProps } from "./ArticleSection";
import { ArticleHeading } from "./ArticleHeading";

export interface ArticleFeaturedWrapperProps
  extends Pick<ArticleSectionProps, "children" | "heading"> {}

export const ArticleFeaturedWrapper: React.FC<ArticleFeaturedWrapperProps> = ({
  children,
  heading,
}) => {
  return (
    <ArticleSection
      unlimitedWidth
      inverted
      className="bg-gradient-to-t from-[var(--primary-color)] to-[var(--primary-color-weaker)]"
    >
      <ArticleSection className="!py-0" unlimitedWidth>
        <ArticleHeading inverted className="mb-15">
          {heading}
        </ArticleHeading>
        {children}
      </ArticleSection>
    </ArticleSection>
  );
};
