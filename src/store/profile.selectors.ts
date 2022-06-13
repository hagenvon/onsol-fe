import { RootState } from "./index";

const getProfileState = (state: RootState) => state.profile;

export const selectProfile = getProfileState;
