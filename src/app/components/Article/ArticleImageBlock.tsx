import * as React from "react";
import Image from "next/image";
import { ArticleCaption, ArticleCaptionProps } from "./ArticleCaption";

export interface ArticleImageBlockProps {
  title?: ArticleCaptionProps["title"];
  description?: ArticleCaptionProps["children"];
  src: string;
  alt: string;
  width?: number;
  height?: number;
  inverted?: boolean;
}

export const ArticleImageBlock: React.FC<ArticleImageBlockProps> = ({
  src,
  height = 460,
  width = 800,
  alt,
  title,
  description,
  inverted,
}) => {
  return (
    <div className="mb-10 md:mb-0">
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="border border-gray-200"
      />
      {(title || description) && (
        <ArticleCaption inverted={inverted} title={title}>
          {description}
        </ArticleCaption>
      )}
    </div>
  );
};
