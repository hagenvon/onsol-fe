import { EditProfile } from "./EditProfile";
import { EditSocialLinks } from "./EditSocialLinks";
import { EditPersonalLinks } from "./EditPersonalLinks";

export interface EditStep {
  path: string;
  component: () => JSX.Element;
  linkLabel: string;
}

export const editSteps: EditStep[] = [
  { path: "profile", component: EditProfile, linkLabel: "Profile" },
  {
    path: "social-links",
    component: EditSocialLinks,
    linkLabel: "Social Links",
  },
  {
    path: "custom-links",
    component: EditPersonalLinks,
    linkLabel: "Personal Links",
  },
];
