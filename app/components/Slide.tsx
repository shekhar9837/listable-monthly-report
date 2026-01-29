import type { ReactNode } from "react";

type SlideProps = {
  children: ReactNode;
};

export default function Slide({ children }: SlideProps) {
  return <div className="h-full w-full px-1 py-1">{children}</div>;
}
