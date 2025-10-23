import * as React from "react";
import { ArticleCaption, ArticleCaptionProps } from "./ArticleCaption";

export interface ArticleVideoBlockProps {
  title?: ArticleCaptionProps["title"];
  ariaLabel?: React.HTMLAttributes<HTMLVideoElement>["aria-label"];
  description?: ArticleCaptionProps["children"];
  source: string;
  notSupportedMessage?: string;
  width?: number | string;
  height?: number | string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
}

export const ArticleVideoBlock: React.FC<ArticleVideoBlockProps> = ({
  ariaLabel,
  autoPlay = true,
  controls,
  loop = true,
  muted = true,
  playsInline = true,
  source,
  width = "100%",
  height,
  title,
  description,
  notSupportedMessage = "Your browser does not support video HTML5 or webm.",
}) => {
  return (
    <div className="mb-10 md:mb-0">
      <video
        aria-label={ariaLabel}
        autoPlay={autoPlay}
        loop={loop}
        controls={controls}
        muted={muted}
        playsInline={playsInline}
        width={width}
        height={height}
        className="border border-gray-200"
      >
        <source src={source} type="video/webm" />
        {notSupportedMessage}
      </video>
      {(title || description) && (
        <ArticleCaption title={title}>{description}</ArticleCaption>
      )}
    </div>
  );
};
