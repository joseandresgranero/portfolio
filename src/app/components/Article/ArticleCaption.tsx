import * as React from "react";

export interface ArticleCaptionProps {
  children: React.ReactNode;
  title?: string;
}

export const ArticleCaption: React.FC<ArticleCaptionProps> = ({
  children,
  title,
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
