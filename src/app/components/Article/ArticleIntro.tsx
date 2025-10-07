import * as React from "react";

export const ArticleIntro = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-3xl text-gray-600 mb-8">{children}</div>;
};
