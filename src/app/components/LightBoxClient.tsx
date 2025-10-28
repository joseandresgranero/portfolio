"use client";
import * as React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Fullscreen, Zoom } from "yet-another-react-lightbox/plugins";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});

import "yet-another-react-lightbox/styles.css";
import { IoExpandOutline } from "react-icons/io5";

export interface LightBoxClientProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  inverted?: boolean;
}

export const LightBoxClient: React.FC<LightBoxClientProps> = ({
  inverted,
  src,
  height = 460,
  width = 800,
  alt,
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative block group cursor-pointer w-full focus:outline-none"
        aria-label={`View image "${alt}" in full size`}
        title={`View image "${alt}" in full size`}
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          className={`border ${
            inverted
              ? "border-gray-600 group-hover:border-blue-200"
              : "border-gray-200 group-hover:border-blue-300"
          } transition ease-in-out duration-150`}
        />
        <IoExpandOutline className="stroke-white w-8 h-8 bg-gray-700 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-150 absolute -top-[16px] -right-[16px]" />
      </button>
      {open && (
        <Lightbox
          controller={{
            closeOnBackdropClick: true,
          }}
          carousel={{
            finite: true,
            preload: 0,
          }}
          toolbar={{
            buttons: ["close"],
          }}
          render={{ buttonPrev: () => null, buttonNext: () => null }}
          styles={{
            container: { backgroundColor: "rgba(0,0,0,0.8)" },
          }}
          open={open}
          close={() => setOpen(false)}
          plugins={[Fullscreen, Zoom]}
          zoom={{
            maxZoomPixelRatio: 3,
            scrollToZoom: true,
          }}
          slides={[{ src, width, height }]}
        />
      )}
    </>
  );
};
