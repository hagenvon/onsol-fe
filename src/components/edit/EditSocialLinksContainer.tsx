import { Stack } from "@mantine/core";
import { useState } from "react";
import { EditSocialLinksOptions } from "./EditSocialLinksOptions";
import { SocialLink } from "../../types/SocialLink";
import { EditSocialLinksSelected } from "./EditSocialLinksSelected";
import { MAX_LENGTH_SOCIAL_LINKS } from "../../_constants/constants";

const all: SocialLink[] = [
  { label: "Twitter", value: "" },
  { label: "Discord", value: "" },
  { label: "Instagram", value: "" },
  { label: "Facebook", value: "" },
  { label: "Twitch", value: "" },
  { label: "Reddit", value: "" },
  { label: "TikTok", value: "" },
];

export function EditSocialLinksContainer() {
  const [selected, setSelected] = useState<SocialLink[]>([]);

  const unselected = all.filter(
    (item) =>
      !selected.find((selectedItem) => selectedItem.label === item.label)
  );

  const handleSelect = (item: SocialLink) => {
    setSelected((prev) => [...prev, item]);
  };

  const handleUnselect = (item: SocialLink) => {
    setSelected(selected.filter((it) => it.label !== item.label));
  };

  console.log(selected);

  return (
    <Stack spacing={"xs"}>
      <EditSocialLinksOptions
        list={unselected}
        select={handleSelect}
        disabled={selected.length >= MAX_LENGTH_SOCIAL_LINKS}
      />
      <EditSocialLinksSelected selected={selected} unselect={handleUnselect} />
    </Stack>
  );
}
