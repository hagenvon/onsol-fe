import { Grid, Textarea, TextInput } from "@mantine/core";

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

export function EditProfileForm() {
  return (
    <Grid gutter={"sm"}>
      <Grid.Col sm={6}>
        <TextInput
          placeholder="Username"
          label="Username"
          required
          sx={sx}
          size={"lg"}
        />
      </Grid.Col>
      <Grid.Col sm={6}>
        <TextInput
          placeholder="Display Name"
          label="Display Name"
          required
          sx={sx}
          size={"lg"}
        />
      </Grid.Col>
      <Grid.Col>
        <Textarea
          placeholder="200 Characters"
          label="Bio"
          maxLength={200}
          autosize
          minRows={3}
          sx={sx}
          size={"lg"}
        />
      </Grid.Col>
    </Grid>
  );
}
