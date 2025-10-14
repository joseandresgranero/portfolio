import * as React from "react";
import Link from "next/link";

export const ArticleBackLink = ({
  children = "← Back to projects",
  href = "/#projects",
}: {
  children?: React.ReactNode;
  href?: string;
}) => {
  return (
    <Link
      href={href}
      className="font-medium text-[var(--primary-color-weaker)] underline-offset-4 hover:underline mb-4 inline-block"
    >
      {children}
    </Link>
  );
};
