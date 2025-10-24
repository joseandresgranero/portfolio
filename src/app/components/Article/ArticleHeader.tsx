import * as React from "react";
import { ArticleBackLink } from "./ArticleBackLink";
import { ArticleTitle } from "./ArticleTitle";
import { ArticleIntro } from "./ArticleIntro";
import { Tag } from "../Tag";
import { IArticle } from "@/types/article";
import { IoLinkOutline, IoLogoFigma, IoLogoGithub } from "react-icons/io5";
import { ArticleLink } from "./ArticleLink";

export interface ArticleHeaderProps {
  title?: IArticle["title"];
  figmaLink?: IArticle["figmaLink"];
  githubLink?: IArticle["githubLink"];
  storybookLink?: IArticle["storybookLink"];
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
  storybookLink,
  githubLink,
  figmaLink,
  tags,
}) => {
  return (
    <header className="mb-22">
      <div className="max-w-[var(--max-width-text)]">
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
      {(githubLink || storybookLink || figmaLink) && (
        <div className="flex items-center flex-0 gap-4 mt-8 py-2 border-y-1 border-gray-300">
          {figmaLink && (
            <ArticleLink
              href={figmaLink}
              icon={<IoLogoFigma />}
              title="Go to the Figma design (new tab)"
            >
              Figma design
            </ArticleLink>
          )}
          {githubLink && (
            <ArticleLink
              href={githubLink}
              icon={<IoLogoGithub />}
              title="Got to the Github repository (new tab)"
            >
              Github repository
            </ArticleLink>
          )}
          {storybookLink && (
            <ArticleLink
              href={storybookLink}
              icon={<IoLinkOutline />}
              title="Go to the Storybook docs (new tab)"
            >
              SB documentation
            </ArticleLink>
          )}
        </div>
      )}
    </header>
  );
};
