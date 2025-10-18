import * as React from "react";

interface ArticleLinkProps {
  href: string;
  children: React.ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  title?: string;
  icon?: React.ReactNode;
}

export const ArticleLink: React.FC<ArticleLinkProps> = ({
  href,
  children,
  icon,
  rel,
  target = "_blank",
  title,
}) => {
  return (
    <a
      href={href}
      className="flex items-center rounded-2xl hover:bg-gray-200 px-3 py-1 gap-2 text-sm transition-colors duration-150 ease-in-out"
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : rel}
      title={title}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
};
