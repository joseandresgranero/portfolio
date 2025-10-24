import * as React from "react";

export interface ArticleCaptionProps {
  children: React.ReactNode;
  title?: string;
  inverted?: boolean;
}

export const ArticleCaption: React.FC<ArticleCaptionProps> = ({
  children,
  inverted,
  title,
}) => {
  return (
    <div className="text-lg/7 mt-4 max-w-[var(--max-width-text)]">
      <strong
        className={`block text-xl mb-2 ${
          inverted
            ? "text-[var(--heading-color-inverted)]"
            : "text-[var(--heading-color)]"
        }`}
      >
        {title}
      </strong>
      {children}
    </div>
  );
};
