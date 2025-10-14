"use client";

import * as React from "react";
import Image from "next/image";
import { useParallaxBg } from "@/hooks/useParallaxBg";
//import { ParallaxBanner } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import { IoLinkOutline, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { ArticleCardProps } from "@/types/article";

export const ProjectsCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  image,
  imageHeight,
  imageWidth,
  imageAlt,
  slug,
  githubLink,
  storybookLink,
  figmaLink,
}) => {
  return (
    <div className="card card--project flex flex-col">
      <a
        href={`/projects/${slug}`}
        className="overflow-hidden border border-gray-200 h-[280px]"
        title="View project"
      >
        <Image
          width={imageWidth || 406}
          height={imageHeight || 280}
          src={image}
          alt={imageAlt}
          className="object-cover transition-all duration-150 hover:scale-110 hover:saturate-150"
        />
      </a>
      <div className="px-1 py-6">
        <h2 className="text-[24px] font-bold font-heading mb-5">{title}</h2>
        <p className="text-gray-500">{description}</p>
        <div className="flex items-center justify-between mt-6">
          <a
            href={`/projects/${slug}`}
            className="px-4 py-3 bg-[var(--primary-color-weak)] text-sm font-medium text-white rounded cursor-pointer hover:bg-[var(--primary-color-weaker)] transition-colors duration-300 ease-in-out"
          >
            View Project
          </a>
          {(githubLink || storybookLink || figmaLink) && (
            <div className="ml-2 flex flex-0 space-x-3">
              {githubLink && (
                <a
                  href={githubLink}
                  className="text-2xl text-gray-700 transform transition-transform duration-100 ease-in hover:scale-120"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Got to the Github repository (new tab)"
                >
                  <IoLogoGithub />
                </a>
              )}
              {storybookLink && (
                <a
                  href={storybookLink}
                  className="text-2xl text-gray-700 transform transition-transform duration-100 ease-in hover:scale-120"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Go to the Storybook docs (new tab)"
                >
                  <IoLinkOutline />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
