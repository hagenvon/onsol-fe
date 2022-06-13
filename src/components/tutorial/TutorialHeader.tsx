import { Title } from "@mantine/core";
import { ReactNode } from "react";

export function TutorialHeader({ children }: { children: ReactNode }) {
  return <Title>{children}</Title>;
}
