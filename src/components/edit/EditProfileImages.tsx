import { Box } from "@mantine/core";
import { EditProfileBanner } from "./EditProfileBanner";
import { EditProfileAvatar } from "./EditProfileAvatar";

export function EditProfileImages() {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      })}
    >
      <EditProfileBanner />
      <EditProfileAvatar />
    </Box>
  );
}
