import { createProfile, Profile } from "../types/Profile";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadProfile } from "../api/profile.api";

interface ProfileState {
  isLoading: boolean;
  isInitialized: boolean;
  isSaving: boolean;
  profile: Profile;
  connectedWallet: string;
  error: string;
}

const initialState: ProfileState = {
  isLoading: false,
  isInitialized: false,
  isSaving: false,
  connectedWallet: "",
  profile: createProfile(),
  error: "",
};

export const fetchProfile = createAsyncThunk<Profile, string>(
  "profile/fetchOne",
  async (wallet: string) => {
    return await loadProfile(wallet);
  }
);

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
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(
      fetchProfile.fulfilled,
      (state, action: PayloadAction<Profile>) => {
        state.profile = {
          ...action.payload,
        };
      }
    );
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
