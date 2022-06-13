import { Stack } from "@mantine/core";
import { useState } from "react";
import { PersonalLink } from "../../types/PersonalLink";
import { EditPersonalLinksSelected } from "./EditPersonalLinksSelected";
import { EditPersonalLinksAdd } from "./EditPersonalLinksAdd";
import { MAX_LENGTH_PERSONAL_LINKS } from "../../_constants/constants";

export function EditPersonalLinksContainer() {
  const [personalLinks, setPersonalLinks] = useState<PersonalLink[]>([]);

  const isDisabled = personalLinks.length >= MAX_LENGTH_PERSONAL_LINKS;

  const handleAdd = (item: PersonalLink) => {
    setPersonalLinks((prev) => [...prev, item]);
  };

  const handleRemove = (item: PersonalLink) => {
    setPersonalLinks(personalLinks.filter((it) => it.label !== item.label));
  };

  return (
    <Stack>
      <EditPersonalLinksSelected
        list={personalLinks}
        handleRemove={handleRemove}
      />
      {!isDisabled && (
        <EditPersonalLinksAdd
          disabled={isDisabled}
          handleAdd={handleAdd}
          personalLinks={personalLinks}
        />
      )}
    </Stack>
  );
}
