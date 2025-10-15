import * as React from "react";

export const ArticleIntro = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-3xl leading-10 text-gray-600 my-8">{children}</div>
  );
};
