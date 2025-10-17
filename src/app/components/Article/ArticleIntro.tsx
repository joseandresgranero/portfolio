import * as React from "react";

export const ArticleIntro = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-2xl/9 sm:text-3xl sm:leading-10 text-gray-600 my-8">
      {children}
    </div>
  );
};
