import * as React from "react";

export const ArticleParagraph = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <p className="mb-5 last:mb-0">{children}</p>;
};
