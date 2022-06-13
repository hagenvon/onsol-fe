import { Card, Center, Button, Group } from "@mantine/core";
import { EditCardHeader } from "./EditCardHeader";
import { EditProfileImages } from "./EditProfileImages";
import { EditProfileForm } from "./EditProfileForm";

export function EditProfile() {
  return (
    <Card>
      <Card.Section pt={37} pb={37}>
        <EditCardHeader>1. Edit your Profile</EditCardHeader>
      </Card.Section>

      <Group direction={"column"}>
        <EditProfileImages />
        <EditProfileForm />
      </Group>

      <Center>
        <Button size={"lg"} mt={50}>
          Save
        </Button>
      </Center>
    </Card>
  );
}
