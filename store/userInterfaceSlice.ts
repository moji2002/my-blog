import { createSlice } from "@reduxjs/toolkit";

export interface UserInterface {
  navMenuVisible: boolean;
  searchVisible: boolean;
  loaded: boolean;
}

const initialState: UserInterface = {
  navMenuVisible: false,
  searchVisible: false,
  loaded: false,
};

export const userInterfaceSlice = createSlice({
  name: "userInterface",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.navMenuVisible = true;
    },
    closeMenu: (state) => {
      state.navMenuVisible = false;
    },
    openSearch: (state) => {
      state.searchVisible = true;
    },
    closeSearch: (state) => {
      state.searchVisible = false;
    },
    pageLoaded: (state) => {
      state.loaded = true;
    },
  },
});

export const { openMenu, closeMenu, openSearch, closeSearch, pageLoaded } =
  userInterfaceSlice.actions;

export default userInterfaceSlice.reducer;
