import * as React from "react";

export const ArticleList = ({
  children,
  noBullets,
}: {
  children?: React.ReactNode;
  noBullets?: boolean;
}) => {
  return (
    <ul
      className={`${
        noBullets ? "" : "list-outside list-disc pl-4 "
      } flex flex-col gap-2 mb-5`}
    >
      {children}
    </ul>
  );
};
