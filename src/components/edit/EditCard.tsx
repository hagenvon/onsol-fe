import { ReactNode, useEffect } from "react";
import { useScrollIntoView } from "@mantine/hooks";
import { useLocation } from "react-router-dom";

export interface EditCardProps {
  component: ReactNode;
  path: string;
}

const OFFSET = 24;

export function EditCard({ component, path }: EditCardProps) {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: OFFSET,
    easing: function easeOutQuart(x: number): number {
      return 1 - Math.pow(1 - x, 4);
    },
  });

  const location = useLocation();

  const match = (pathname?: string) => {
    if (!pathname) {
      return false;
    }

    return location.pathname.includes("/" + pathname);
  };

  useEffect(() => {
    if (match(path)) {
      scrollIntoView();
    }
  }, [location]);

  return <div ref={targetRef}>{component}</div>;
}
