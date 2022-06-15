import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { Box, Button } from "@mantine/core";
import { MenuContent } from "./MenuContent";

export function Menu() {
  const matches = useMediaQuery("(min-width: 992px)");
  const [opened, setOpened] = useState(false);

  if (!matches) return null;

  return (
    <Box
      sx={(theme) => ({
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
      })}
    >
      <Box
        sx={(theme) => ({
          width: opened ? "200px" : "60px",
          height: 300,
          background: "white",
          borderTopRightRadius: "25px",
          borderBottomRightRadius: "25px",
          paddingTop: "25px",
          paddingBottom: "25px",

          transition: "width 0.3s ease-in",
        })}
      >
        <MenuContent />

        <Button onClick={() => setOpened(!opened)}>Toggle</Button>
      </Box>
    </Box>
  );
}
