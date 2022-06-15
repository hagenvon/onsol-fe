import { Box, Group, Burger } from "@mantine/core";

interface MenuHeaderProps {
  opened: boolean;
  handleClick: () => void;
}

export function MenuHeader({ opened, handleClick }: MenuHeaderProps) {
  return (
    <Box
      sx={() => ({
        position: "fixed",
        zIndex: 9000,
        backgroundColor: "red",
        width: "100%",
      })}
    >
      <Group position={"apart"}>
        <div>LOGO MOBILE</div>

        <Burger opened={opened} onClick={handleClick} title={"title"} />
      </Group>
    </Box>
  );
}
