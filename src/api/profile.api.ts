import { sleep } from "../utils/sleep";
import { createProfile, Profile } from "../types/Profile";

export async function loadProfile(wallet: string): Promise<Profile> {
  await sleep(1500);

  return createProfile({
    username: "Yo",
    bio: wallet,
  });
}

export async function saveProfile(profile: Profile): Promise<Profile> {
  // save profile, return profile
  await sleep(1500);

  return profile;
}
