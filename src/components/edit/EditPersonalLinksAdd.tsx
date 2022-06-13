import { Alert, Button, Grid, TextInput } from "@mantine/core";
import { useState } from "react";
import { PersonalLink } from "../../types/PersonalLink";

interface EditPersonalLinksAddProps {
  disabled: boolean;
  handleAdd: (item: PersonalLink) => void;
  personalLinks: PersonalLink[];
}

const sx = () => ({
  input: {
    borderRadius: "6px",
    borderWidth: "2px",
  },
  textarea: {
    borderRadius: "6px",
    borderWidth: "2px",
  },
});

export function EditPersonalLinksAdd({
  disabled,
  handleAdd,
  personalLinks,
}: EditPersonalLinksAddProps) {
  const [label, setLabel] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const add = () => {
    const allLabels = personalLinks.map((it) => it.label);

    if (allLabels.includes(label)) {
      setError("No duplicate labels please!");
    } else {
      handleAdd({
        label,
        value,
      });

      setError("");
    }
  };

  return (
    <Grid gutter={"sm"}>
      <Grid.Col sm={6}>
        <TextInput
          placeholder="Link Name"
          label="Name"
          required
          sx={sx}
          size={"lg"}
          value={label}
          onChange={(event) => setLabel(event.currentTarget.value)}
        />
      </Grid.Col>
      <Grid.Col sm={6}>
        <TextInput
          placeholder="Type your link"
          label="URL"
          required
          sx={sx}
          size={"lg"}
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </Grid.Col>
      <Grid.Col>
        {error && <Alert>{error}</Alert>}

        <Button onClick={add} disabled={disabled}>
          Add new Link
        </Button>
      </Grid.Col>
    </Grid>
  );
}
