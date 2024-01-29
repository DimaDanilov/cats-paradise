import { ChildrenProps } from "types/ChildrenProps";

export function PageLayout({ children }: ChildrenProps) {
  return <div className="w-11/12 mx-auto py-20">{children}</div>;
}
