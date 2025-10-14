import * as React from "react";

export const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="text-sm bg-[var(--primary-00)] px-2 py-1 rounded-sm text-[var(--primary-color)]">
      {children}
    </span>
  );
};
