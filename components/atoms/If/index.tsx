import React from "react";

type IfProps = {
  test: boolean;
  children: React.ReactNode;
};

export function If({ test, children }: IfProps) {
  if (!test) return null;
  return children;
}
