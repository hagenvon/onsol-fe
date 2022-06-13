import { Button, Card, Center } from "@mantine/core";
import { EditCardHeader } from "./EditCardHeader";
import { EditSocialLinksContainer } from "./EditSocialLinksContainer";

export function EditSocialLinks() {
  return (
    <Card>
      <Card.Section pt={37} pb={37}>
        <EditCardHeader>2. Add your social links</EditCardHeader>
      </Card.Section>
      Bla bla
      <EditSocialLinksContainer />
      <Center>
        <Button size={"lg"} mt={50}>
          Save
        </Button>
      </Center>
    </Card>
  );
}
