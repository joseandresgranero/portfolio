import * as React from "react";
import { Article } from "./Article";
import { ArticleHeading, ArticleHeadingProps } from "./ArticleHeading";

export interface ArticleSectionProps {
  heading?: string;
  children: React.ReactNode;
  unlimitedWidth?: boolean;
  headingTag?: ArticleHeadingProps["htmlTag"];
  headingSize?: ArticleHeadingProps["size"];
  headingSpacing?: ArticleHeadingProps["spacing"];
  lead?: string;
  append?: string;
}

export const ArticleSection: React.FC<ArticleSectionProps> = ({
  append,
  children,
  heading,
  headingSize,
  headingSpacing,
  headingTag,
  unlimitedWidth,
  lead,
}) => {
  return (
    <div
      className={`leading-relaxed mb-15 last:mb-0 ${
        unlimitedWidth ? "" : "max-w-[var(--max-width-text-lg)]"
      }`}
    >
      {append ? (
        <div className="flex flex-row items-center space-x-4 mb-2">
          <ArticleHeading
            htmlTag={headingTag}
            size={headingSize}
            spacing="mb-0"
          >
            {heading}
          </ArticleHeading>
          <div className="text-lg text-gray-600">—</div>
          <div className="text-lg text-gray-600">{append}</div>
        </div>
      ) : (
        <ArticleHeading
          htmlTag={headingTag}
          size={headingSize}
          spacing={headingSpacing}
        >
          {heading}
        </ArticleHeading>
      )}
      {lead && <p className="text-lg text-gray-500 italic mb-4">{lead}</p>}
      {children}
    </div>
  );
};
