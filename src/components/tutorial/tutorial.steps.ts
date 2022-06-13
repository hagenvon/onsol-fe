import { TutorialCustomize } from "./TutorialCustomize";
import { TutorialAddContent } from "./TutorialAddContent";
import { TutorialShareYourLink } from "./TutorialShareYourLink";

export interface TutorialStep {
  path: string;
  component: () => JSX.Element;
}

export const tutorialSteps: TutorialStep[] = [
  {
    path: "customize",
    component: TutorialCustomize,
  },
  {
    path: "content",
    component: TutorialAddContent,
  },
  {
    path: "share",
    component: TutorialShareYourLink,
  },
];
