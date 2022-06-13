import { Box, Button, Container, Grid, Stack } from "@mantine/core";
import { Sidebar } from "../components/sidebar/Sidebar";
import { editSteps } from "../components/edit/edit.steps";
import { EditCard } from "../components/edit/EditCard";
import { useNavigate } from "react-router-dom";

export function EditPage() {
  const navigate = useNavigate();

  const sections = editSteps.map((it) => {
    const Element = it.component;
    return <EditCard path={it.path} component={<Element />} key={it.path} />;
  });

  return (
    <Box
      sx={() => ({
        width: "100%",
        minHeight: "100%",
        background:
          "linear-gradient(16deg, rgba(0,0,0,1) 0%, rgba(29,25,55,1) 51%, rgba(27,20,77,1) 100%)",
      })}
    >
      <Container fluid={true} style={{ padding: "24px", position: "relative" }}>
        <Grid gutter={24}>
          <Grid.Col xs={0} md={3}>
            <Sidebar />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <Stack spacing={24}>{sections}</Stack>
          </Grid.Col>
          <Grid.Col xs={0} md={3}>
            <div
              style={{
                position: "fixed",
                display: "flex",
                alignItems: "flex-end",
                alignContent: "center",
                height: "100%",
                width: "100%",
                top: 0,
                bottom: 0,
              }}
            >
              <Button
                variant={"filled"}
                mb={24}
                onClick={() => navigate("/preview")}
              >
                Preview
              </Button>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
