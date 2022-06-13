import { Chip, Group } from "@mantine/core";
import { SocialLink } from "../../types/SocialLink";

interface EditSocialLinksOptionsProps {
  list: SocialLink[];
  select: (item: SocialLink) => void;
  disabled: boolean;
}

export function EditSocialLinksOptions({
  list,
  select,
  disabled,
}: EditSocialLinksOptionsProps) {
  const items = list.map((item) => {
    return (
      <Chip
        key={item.label}
        variant="outline"
        onClick={() => select(item)}
        disabled={disabled}
        size={"lg"}
        sx={() => ({
          label: {
            borderWidth: "2px",
            fontSize: "0.9rem",
          },
        })}
      >
        {item.label}
      </Chip>
    );
  });

  return <Group spacing={"xs"}>{items}</Group>;
}
