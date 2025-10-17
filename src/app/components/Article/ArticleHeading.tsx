import * as React from "react";

export interface ArticleHeadingProps {
  children: React.ReactNode;
  htmlTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  spacing?: string;
}

export const ArticleHeading: React.FC<ArticleHeadingProps> = ({
  children,
  htmlTag = "h2",
  size,
  spacing = "mb-8",
}) => {
  const HtmlTag = htmlTag as React.ElementType;
  const SIZE_CLASSES = {
    h1: "text-5xl",
    h2: "text-3xl",
    h3: "text-2xl",
    h4: "text-xl",
    h5: "text-lg",
    h6: "text-base",
  };
  return (
    <HtmlTag
      className={`block font-bold font-heading ${
        SIZE_CLASSES[size || htmlTag]
      } ${spacing} text-[var(--heading-color)]`}
    >
      {children}
    </HtmlTag>
  );
};
