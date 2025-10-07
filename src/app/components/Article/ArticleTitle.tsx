import * as React from "react";

export const ArticleTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="text-6xl font-heading font-extrabold text-[var(--heading-color)]">
      {children}
    </h1>
  );
};
