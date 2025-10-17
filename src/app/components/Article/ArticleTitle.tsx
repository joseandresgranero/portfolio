import * as React from "react";

export const ArticleTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-5xl/14 sm:text-6xl/16 font-heading font-extrabold text-[var(--heading-color)]">
      {children}
    </h1>
  );
};
