import { MenuContent } from "./MenuContent";
import { Drawer } from "@mantine/core";
import { useState } from "react";
import { MenuHeader } from "./MenuHeader";
import { useMediaQuery } from "@mantine/hooks";

export function MenuMobile() {
  const matches = useMediaQuery("(max-width: 991px)");

  const [opened, setOpened] = useState(false);

  if (!matches) return null;

  return (
    <>
      <MenuHeader opened={opened} handleClick={() => setOpened(!opened)} />

      <Drawer
        position="left"
        size="100%"
        opened={opened}
        onClose={() => setOpened(false)}
        transition={"pop-bottom-left"}
      >
        <MenuContent />
      </Drawer>
    </>
  );
}
