import { Box } from "@mantine/core";

export function EditProfileBanner() {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.blue[1],

        borderTopLeftRadius: theme.radius.lg,
        borderTopRightRadius: theme.radius.lg,

        paddingBottom: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        minHeight: "60px",
        minWidth: "100%",
        cursor: "pointer",

        "&:hover": {
          backgroundColor: theme.colors.blue[2],
        },
      })}
    >
      Add Banner
    </Box>
  );
}
