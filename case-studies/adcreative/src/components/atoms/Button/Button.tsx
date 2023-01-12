import React from 'react';

import * as S from './style';

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, ref) => {
  return (
    <S.Button ref={ref} {...props}>
      {children}
    </S.Button>
  );
});

Button.displayName = 'Button';
