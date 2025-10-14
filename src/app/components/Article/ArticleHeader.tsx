import * as React from "react";
import { ArticleBackLink } from "./ArticleBackLink";
import { ArticleTitle } from "./ArticleTitle";
import { ArticleIntro } from "./ArticleIntro";
import { Tag } from "../Tag";
import { IArticle } from "@/types/article";

export interface ArticleHeaderProps {
  title?: IArticle["title"];
  intro?: IArticle["description"];
  tags?: IArticle["tags"];
  backLinkText?: string;
  backLinkHref?: string;
  hideBackLink?: boolean;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  backLinkText,
  backLinkHref,
  title,
  hideBackLink,
  intro,
  tags,
}) => {
  return (
    <div className="max-w-[var(--max-width-text)] mb-22">
      {!hideBackLink && (
        <ArticleBackLink children={backLinkText} href={backLinkHref} />
      )}
      <ArticleTitle>{title}</ArticleTitle>
      {intro && <ArticleIntro>{intro}</ArticleIntro>}
      {tags && tags?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag: string) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
    </div>
  );
};
