import * as React from "react";
import { ArticleCaption, ArticleCaptionProps } from "./ArticleCaption";
import { LightBoxClient } from "../LightBoxClient";

export interface ArticleImageBlockProps {
  className?: React.HTMLAttributes<HTMLAnchorElement>["className"];
  title?: ArticleCaptionProps["title"];
  description?: ArticleCaptionProps["children"];
  src: string;
  alt: string;
  width?: number;
  height?: number;
  inverted?: boolean;
}

export const ArticleImageBlock: React.FC<ArticleImageBlockProps> = ({
  className,
  src,
  height = 460,
  width = 800,
  alt,
  title,
  description,
  inverted,
}) => {
  return (
    <div className={`mb-10 md:mb-0 ${className}`}>
      <LightBoxClient
        inverted={inverted}
        alt={alt}
        height={height}
        width={width}
        src={src}
      />
      {(title || description) && (
        <ArticleCaption inverted={inverted} title={title}>
          {description}
        </ArticleCaption>
      )}
    </div>
  );
};
