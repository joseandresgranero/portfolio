import * as React from "react";

export const ArticleList = ({ children }: { children?: React.ReactNode }) => {
  return (
    <ul className="text-lg list-outside pl-4 flex flex-col gap-2 list-disc">
      {children}
    </ul>
  );
};
