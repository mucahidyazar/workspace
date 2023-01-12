import React, { createContext } from 'react';

import { THEME } from '@/constants';
import { GlobalStyle } from '@/styles';
import { setStorage } from '@/utils';

type ITheme = keyof typeof THEME

export const ThemeContext = createContext<{
  theme: ITheme;
  changeTheme: (selectedTheme: ITheme) => void;
}>({
  theme: THEME.default,
  changeTheme: () => null
});

export class ThemeProvider extends React.Component<{
  children: React.ReactNode;
}> {
  state: { theme: ITheme } = { theme: THEME.light };

  render() {
    const changeTheme = (selectedTheme: ITheme) => {
      if (selectedTheme) {
        setStorage('theme', selectedTheme);
        this.setState({ theme: selectedTheme });
        return;
      }
      const newTheme = this.state.theme === THEME.light ? THEME.default : THEME.light;
      this.setState({ theme: newTheme });
    };

    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          changeTheme
        }}
      >
        {this.props.children}
        <GlobalStyle theme={this.state.theme} />
      </ThemeContext.Provider>
    );
  }
}

export const useTheme = () => {
  const { theme, changeTheme } = React.useContext(ThemeContext);

  return [theme, changeTheme] as const;
};
