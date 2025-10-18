import * as React from "react";

export const ArticleCaption = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <div className="text-lg/7 mt-4 max-w-[var(--max-width-text)]">
      <strong className="block text-xl text-[var(--heading-color)] mb-2">
        {title}
      </strong>
      {children}
    </div>
  );
};
