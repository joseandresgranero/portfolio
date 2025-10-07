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
    <Link href={href} className="text-blue-600 hover:underline mb-4 block">
      {children}
    </Link>
  );
};
