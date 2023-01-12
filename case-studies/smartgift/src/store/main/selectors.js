export const selectMain = (state) => state.main;
export const selectMainTheme = (state) => selectMain(state)?.theme;
