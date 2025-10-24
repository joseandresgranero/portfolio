import * as React from "react";
import { Article } from "./Article";
import { ArticleHeading, ArticleHeadingProps } from "./ArticleHeading";

export interface ArticleSectionProps {
  heading?: string;
  children: React.ReactNode;
  unlimitedWidth?: boolean;
  inverted?: boolean;
  headingTag?: ArticleHeadingProps["htmlTag"];
  headingSize?: ArticleHeadingProps["size"];
  headingSpacing?: ArticleHeadingProps["spacing"];
  lead?: string;
  append?: string;
  className?: string;
}

export const ArticleSection: React.FC<ArticleSectionProps> = ({
  append,
  className,
  children,
  heading,
  headingSize,
  headingSpacing,
  inverted,
  headingTag,
  unlimitedWidth,
  lead,
}) => {
  return (
    <section
      className={`relative leading-relaxed mb-15 last-of-type:mb-0 ${
        inverted ? "text-[var(--secondary-color-strong)]" : ""
      } ${
        unlimitedWidth
          ? "w-[calc(100%+var(--padding-x-base)*2)] p-[var(--padding-base)] md:p-[var(--padding-base-md)] -left-[var(--padding-x-base)] -right-[var(--padding-x-base)] md:w-[calc(100%+var(--padding-x-base-md)*2)] md:-left-[var(--padding-x-base-md)] md:-right-[var(--padding-x-base-md)]"
          : "max-w-[var(--max-width-text)]"
      } ${className}`}
    >
      {append && heading ? (
        <div className="flex flex-row items-center space-x-4 mb-2">
          <ArticleHeading
            htmlTag={headingTag}
            size={headingSize}
            spacing="mb-0"
            inverted={inverted}
          >
            {heading}
          </ArticleHeading>
          <div
            className={`text-lg ${
              inverted ? "text-gray-300" : "text-gray-600"
            }`}
          >
            —
          </div>
          <div
            className={`text-lg ${
              inverted ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {append}
          </div>
        </div>
      ) : heading ? (
        <ArticleHeading
          htmlTag={headingTag}
          size={headingSize}
          spacing={headingSpacing}
          inverted={inverted}
        >
          {heading}
        </ArticleHeading>
      ) : null}
      {lead && (
        <p
          className={`text-lg italic mb-4 ${
            inverted ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {lead}
        </p>
      )}
      {children}
    </section>
  );
};
