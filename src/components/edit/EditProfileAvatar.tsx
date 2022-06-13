import { Box } from "@mantine/core";

export function EditProfileAvatar() {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.blue[1],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        width: "160px",
        height: "160px",

        border: "4px solid white",
        marginTop: "-80px",
        cursor: "pointer",

        "&:hover": {
          backgroundColor: theme.colors.blue[2],
        },
      })}
    >
      <div>Add Picture</div>
    </Box>
  );
}
