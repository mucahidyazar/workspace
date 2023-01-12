import { createGlobalStyle, css } from 'styled-components';

import { THEME } from '../constants';

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #000000;
    --white: #FFFFFF;
    --background: #EEEEEE;
    --color: #0D0D0D;
    --primary: #007FDB;
    --primary-hover: #0064B8;
    --secondary: #20EEB0;
    --secondary-hover: #1EDAA1;
    --gray: #EBEFF2;
    --gray-dark: #888888;
    --danger: #FF0000;

    --size-xs: 12px;
    --size-sm: 14px;
    --size-md: 16px;
    --size-lg: 18px;
    --size-xl: 20px;
    --size-2xl: 22px;
    --size-3xl: 24px;
    --size-4xl: 48px;
    --size-5xl: 64px;

    ${({ theme }: { theme: string }) =>
    theme === THEME.light &&
    css`
        --background: #333333;
        --black: black;
        --color: #0e0e0e;
        --danger: #ff2222;
        --gray: #ebeff2;
        --gray-dark: #777777;
        --primary: #007dfd;
        --primary-hover: #0064e0;
        --secondary: #45f2c8;
        --secondary-hover: #1edaa1;
        --white: white;
      `}
  };

  html,
  body {
    color: var(--color);
    padding: 0;
    margin: 0;
    font-family: 'Inter', 'Outfit', sans-serif;
    font-size: var(--size-md);
  }

  body {
    background-color: var(--background);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
