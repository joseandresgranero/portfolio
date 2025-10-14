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
  htmlTag?: React.ElementType;
}

export const Article: React.FC<ArticleProps> = ({
  backLinkHref,
  backLinkText,
  className,
  children,
  title,
  hideBackLink,
  htmlTag = "main",
  intro,
  role,
  tags,
}) => {
  const HtmlTag = htmlTag as React.ElementType;
  return (
    <HtmlTag
      className={`p-[var(--padding-base)] md:p-[var(--padding-base-md)] text-gray-600 md:min-w-[490px] ${className}`}
    >
      {((hideBackLink && backLinkText) || title || tags || intro) && (
        <ArticleHeader
          backLinkText={backLinkText}
          backLinkHref={backLinkHref}
          hideBackLink={hideBackLink}
          title={title}
          tags={tags}
          intro={intro}
        />
      )}
      {role && <ArticleRole>{role}</ArticleRole>}
      {children}
    </HtmlTag>
  );
};
