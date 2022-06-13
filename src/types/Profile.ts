import { PersonalLink } from "./PersonalLink";
import { SocialLink } from "./SocialLink";

export interface Profile {
  bannerSrc: string;
  avatarSrc: string;
  username: string;
  displayName: string;
  bio: string;
  socialLinks: SocialLink[];
  personalLinks: PersonalLink[];
}

export const createProfile = (props: Partial<Profile> = {}): Profile => ({
  username: "",
  displayName: "",
  bio: "",
  bannerSrc: "",
  avatarSrc: "",
  personalLinks: [],
  socialLinks: [],

  ...props,
});
