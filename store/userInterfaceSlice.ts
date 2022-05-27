import { createSlice } from "@reduxjs/toolkit";

export interface UserInterface {
  navMenuVisible: boolean;
  searchVisible: boolean;
}

const initialState: UserInterface = {
  navMenuVisible: false,
  searchVisible: false,
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
  },
});

export const { openMenu, closeMenu, openSearch, closeSearch } =
  userInterfaceSlice.actions;

export default userInterfaceSlice.reducer;
