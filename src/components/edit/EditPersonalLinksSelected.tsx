import { Box, Button, Stack } from "@mantine/core";
import { PersonalLink } from "../../types/PersonalLink";

interface EditPersonalLinksSelectedProps {
  list: PersonalLink[];
  handleRemove: (item: PersonalLink) => void;
}

export function EditPersonalLinksSelected({
  list,
  handleRemove,
}: EditPersonalLinksSelectedProps) {
  const items = list.map((item) => {
    return (
      <Box key={item.label}>
        <span>{item.label}</span>
        <span>{item.value}</span>

        <Button onClick={() => handleRemove(item)}>Remove</Button>
      </Box>
    );
  });

  return <Stack spacing={"xs"}>{items}</Stack>;
}
