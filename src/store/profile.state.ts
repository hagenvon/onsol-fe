import { createProfile, Profile } from "../types/Profile";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  isLoading: boolean;
  isInitialized: boolean;
  isSaving: boolean;
  profile: Profile;
  connectedWallet: string;
}

const initialState: ProfileState = {
  isLoading: false,
  isInitialized: false,
  isSaving: false,
  connectedWallet: "",
  profile: createProfile(),
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetProfileState: (state) => {
      state = { ...initialState, connectedWallet: state.connectedWallet };
    },
    updateProfile: (state, action: PayloadAction<Partial<Profile>>) => {
      state.profile = {
        ...state.profile,
        ...action.payload,
      };
    },
    loadingStart: (state) => {
      state.isLoading = true;
    },
    savingStart: (state) => {
      state.isSaving = true;
    },
    setIsInitialized: (state) => {
      state.isInitialized = true;
    },
    savingEnd: (state) => {
      state.isSaving = false;
    },
    loadingEnd: (state) => {
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  resetProfileState,
  updateProfile,
  loadingStart,
  savingStart,
  savingEnd,
  loadingEnd,
  setIsInitialized,
} = profileSlice.actions;

export default profileSlice.reducer;
