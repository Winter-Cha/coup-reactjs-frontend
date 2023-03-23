import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface ThemeProps {
  backgroundColor: string;
  color: string;
  buttonHoverColor?: string;
}

export interface ThemeState {
  isDarkMode: boolean;
  theme: ThemeProps;
}

const initialState: ThemeState = {
  isDarkMode: false,
  theme: {
    backgroundColor: "white",
    color: "black",
    buttonHoverColor: "rgba(0, 0, 0, 0.1)",
  },
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      state.theme = state.isDarkMode
        ? {
          backgroundColor: "#1a1a1a",
          color: "white",
          buttonHoverColor: "rgba(0, 0, 0, 0.7)",
        }
        : {
          backgroundColor: "white",
          color: "black",
          buttonHoverColor: "rgba(0, 0, 0, 0.1)",
        };
    },
    setTheme: (state, action: PayloadAction<{ theme: ThemeProps }>) => {
      state.theme = action.payload.theme;
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;