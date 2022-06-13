import { ReactNode } from "react";
import { Center, Title } from "@mantine/core";

export function EditCardHeader({ children }: { children: ReactNode }) {
  return (
    <Center>
      <Title style={{ fontWeight: 800, fontSize: "1.75rem" }}>{children}</Title>
    </Center>
  );
}
