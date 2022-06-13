import { RootState } from "./index";
import { createSelector } from "@reduxjs/toolkit";

const getProfileState = (state: RootState) => state.profile;

export const selectProfile = createSelector(
  getProfileState,
  (state) => state.profile
);
