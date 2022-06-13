import { Button, Card, Center } from "@mantine/core";
import { EditCardHeader } from "./EditCardHeader";
import { EditPersonalLinksContainer } from "./EditPersonalLinksContainer";

export function EditPersonalLinks() {
  return (
    <Card>
      <Card.Section pt={37} pb={37}>
        <EditCardHeader>3. Add your links</EditCardHeader>
      </Card.Section>
      Bla bla
      <EditPersonalLinksContainer />
      <Center>
        <Button size={"lg"} mt={50}>
          Save
        </Button>
      </Center>
    </Card>
  );
}
