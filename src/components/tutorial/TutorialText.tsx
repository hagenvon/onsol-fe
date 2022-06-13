import { Text } from "@mantine/core";
import { ReactNode } from "react";

export function TutorialText({ children }: { children: ReactNode }) {
  return <Text>{children}</Text>;
}
