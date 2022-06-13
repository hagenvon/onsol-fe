import { Stack, TextInput, useMantineTheme } from "@mantine/core";
import { SocialLink } from "../../types/SocialLink";
import { X } from "tabler-icons-react";

interface EditSocialLinksSelectedProps {
  selected: SocialLink[];
  unselect: (item: SocialLink) => void;
}

export function EditSocialLinksSelected({
  selected,
  unselect,
}: EditSocialLinksSelectedProps) {
  const theme = useMantineTheme();

  const items = selected.map((item) => {
    return (
      <div key={item.label}>
        <TextInput
          size={"lg"}
          rightSection={
            <X
              color={theme.primaryColor}
              strokeWidth={2}
              onClick={() => unselect(item)}
            />
          }
          sx={() => ({
            input: {
              borderWidth: "2px",
            },
          })}
        />
      </div>
    );
  });

  return <Stack spacing={"xs"}>{items}</Stack>;
}
