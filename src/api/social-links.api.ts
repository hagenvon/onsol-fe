import { SocialLink } from "../types/SocialLink";

const all: SocialLink[] = [
  { label: "Twitter", value: "" },
  { label: "Discord", value: "" },
  { label: "Instagram", value: "" },
  { label: "Facebook", value: "" },
  { label: "Twitch", value: "" },
  { label: "Reddit", value: "" },
  { label: "TikTok", value: "" },
];

export async function fetchAllSocialLinks() {
  return all;
}
