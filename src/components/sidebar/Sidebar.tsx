import { SidebarContent } from "./SidebarContent";
import { Box } from "@mantine/core";

export function Sidebar() {
  return (
    <Box
      sx={(theme) => ({
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        height: "100%",

        "@media (max-width: 992px)": {
          right: 0,
          zIndex: 100,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          width: "200px",
          height: 300,
          background: "white",
          borderTopRightRadius: "25px",
          borderBottomRightRadius: "25px",
          paddingTop: "25px",
          paddingBottom: "25px",

          "@media (max-width: 992px)": {
            width: "100%",
            height: "100%",
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
        })}
      >
        <SidebarContent />
      </Box>
    </Box>
  );
}
