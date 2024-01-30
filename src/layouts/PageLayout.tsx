import { ChildrenProps } from "types/ChildrenProps";

export function PageLayout({ children }: ChildrenProps) {
  return (
    <div className="flex flex-col gap-6 w-11/12 mx-auto py-20">{children}</div>
  );
}
