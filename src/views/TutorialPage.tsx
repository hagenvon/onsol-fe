import { Box, Card, Center, Container } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { TutorialNav } from "../components/tutorial/TutorialNav";

export function TutorialPage() {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        height: "100%",
        minHeight: "100%",
        background:
          "linear-gradient(30deg, rgba(0,97,252,1) 32%, rgba(217,55,187,1) 100%)",
      })}
    >
      <Center style={{ width: "100%", height: "100%" }}>
        <Container>
          <Card shadow={"lg"} style={{ maxWidth: "500px" }}>
            <Outlet />
            <TutorialNav />
          </Card>
        </Container>
      </Center>
    </Box>
  );
}
