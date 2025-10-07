import * as React from "react";
import { IArticle } from "@/types/article";
import { ArticleHeader } from "./ArticleHeader";
import { ArticleRole } from "./ArticleRole";

export interface ArticleProps {
  className?: string;
  backLinkText?: string;
  backLinkHref?: string;
  title?: IArticle["title"];
  intro?: IArticle["description"];
  role?: IArticle["role"];
  tags?: IArticle["tags"];
  children?: React.ReactNode;
  hideBackLink?: boolean;
}

export const Article: React.FC<ArticleProps> = ({
  backLinkHref,
  backLinkText,
  className,
  children,
  title,
  hideBackLink,
  intro,
  role,
  tags,
}) => {
  return (
    <main className={`px-20 py-25 text-gray-600 bg-white ${className}`}>
      <ArticleHeader
        backLinkText={backLinkText}
        backLinkHref={backLinkHref}
        hideBackLink={hideBackLink}
        title={title}
        tags={tags}
        intro={intro}
      />
      {role && <ArticleRole>{role}</ArticleRole>}
      {children}
    </main>
  );
};
