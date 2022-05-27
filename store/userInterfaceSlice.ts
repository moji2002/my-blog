import { createSlice } from "@reduxjs/toolkit";

export interface UserInterface {
  isMenuOpen: boolean;
}

const initialState: UserInterface = {
  isMenuOpen: false,
};

export const userInterfaceSlice = createSlice({
  name: "userInterface",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { openMenu, closeMenu } = userInterfaceSlice.actions;

export default userInterfaceSlice.reducer;
