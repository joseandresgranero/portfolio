import * as React from "react";

export interface LinkProps {
  children: React.ReactNode;
  className?: React.HTMLAttributes<HTMLAnchorElement>["className"];
  href: string;
  rel?: string;
  target?: string;
  title?: string;
}

export const Link: React.FC<LinkProps> = ({
  children,
  className,
  href,
  rel = "noreferrer noopener",
  target = "_blank",
  title,
}) => {
  return (
    <a
      href={href}
      target={target}
      title={title}
      rel={rel}
      className={`text-[var(--primary-color-weaker)] font-bold hover:underline hover:underline-offset-4 ${className}`}
    >
      {children}
    </a>
  );
};
