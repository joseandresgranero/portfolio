import * as React from "react";

export const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="text-xs bg-blue-100 px-2 py-1 rounded-sm text-blue-700">
      {children}
    </span>
  );
};
