import React from 'react';

import * as S from './style';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, IInput>(
  ({ children, error, helperText, ...props }, ref) => {
    return (
      <S.Input error={!!error}>
        <S.InputField ref={ref} {...props}>
          {children}
        </S.InputField>
        <S.InputText>{error || helperText}</S.InputText>
      </S.Input>
    );
  }
);

Input.displayName = 'Input';
