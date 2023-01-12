import { css } from 'styled-components';

export const defaultColors = css`
  --color-primary: #e9b258;

  --color-white: #fff;
  --color-black: #000;

  --color-background-dim: #313944;
  --color-background-white: #fff;
  --color-background-black: #000;
  background: var(--color-background-white);

  --color-blue: #72adeb;
  --color-yellow: #efbe55;
  --color-red: #d05e77;
  --color-purple: #8970c7;
  --color-orange: #e4814a;
  --color-green: #6fc182;

  // Scrollbar
  --color-scrollbar: #f5f5f5;
`;

export const darkColors = css`
  :root {
    --color-primary: #e9b258;

    --color-white: #000;
    --color-black: #fff;

    --color-background-dim: #313944;
    --color-background-white: #fff;
    --color-background-black: #000;
    background: var(--color-background-black);
    color: var(--color-black);
  }
`;

export const dimColors = css`
  :root {
    --color-primary: #e9b258;

    --color-white: #000;
    --color-black: #fff;

    --color-background-dim: #313944;
    --color-background-white: #fff;
    --color-background-black: #000;
    background: var(--color-background-dim);
    color: var(--color-black);
  }
`;
