import * as React from "react";

export const ArticleParagraph = ({
  children,
  htmlTag = "p",
}: {
  children: React.ReactNode;
  htmlTag?: React.ElementType;
}) => {
  const HtmlTag = htmlTag as React.ElementType;
  return <HtmlTag className="mb-5 last:mb-0">{children}</HtmlTag>;
};
