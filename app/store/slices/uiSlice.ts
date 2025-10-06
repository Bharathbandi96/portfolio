import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  isMenuOpen: boolean;
  activeSection: string;
  isScrolled: boolean;
  theme: 'light' | 'dark';
}

const initialState: UiState = {
  isMenuOpen: false,
  activeSection: 'home',
  isScrolled: false,
  theme: 'light',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    },
    setScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleMenu, closeMenu, setActiveSection, setScrolled, toggleTheme } = uiSlice.actions;
export default uiSlice.reducer;