import { tutorialSteps } from "./tutorial.steps";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button, Center } from "@mantine/core";

export function TutorialNav() {
  let activeClassName = "active-nav-item";

  let location = useLocation();
  const navigate = useNavigate();

  const match = (path?: string) => {
    if (!path) {
      return false;
    }

    return location.pathname.includes("/" + path);
  };

  const isLast = match(tutorialSteps[tutorialSteps.length - 1].path);
  const isFirst = match(tutorialSteps[0].path);

  const currentIndex = tutorialSteps.findIndex((step) => match(step.path));

  const buttons = tutorialSteps.map((step) => {
    return (
      <NavLink
        key={step.path}
        to={step.path}
        className={({ isActive }) => (isActive ? activeClassName : undefined)}
      >
        <div className={"nav-item"}></div>
      </NavLink>
    );
  });

  const getNextIndex = (step: number) => {
    if (step === 0) {
      return currentIndex;
    }

    return step > 0
      ? Math.min(currentIndex + step, tutorialSteps.length - 1)
      : Math.max(currentIndex + step, 0);
  };

  const handleNavStep = (step: number) => () => {
    const nextIndex = getNextIndex(step);

    navigate(tutorialSteps[nextIndex].path);
  };

  if (isLast) {
    return (
      <Center>
        <Button onClick={() => navigate("/edit")}>Get started</Button>
      </Center>
    );
  }

  return (
    <Center
      style={{ display: "flex", alignContent: "center", alignItems: "center" }}
    >
      <Button size={"xs"} disabled={isFirst} onClick={handleNavStep(-1)}>
        Back
      </Button>
      {buttons}
      <Button size={"xs"} disabled={isLast} onClick={handleNavStep(1)}>
        Next
      </Button>
    </Center>
  );
}
