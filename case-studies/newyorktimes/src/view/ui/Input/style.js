import styled, { css } from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 12px;
  outline: none;
  border: none;
  border: 1px solid var(--color-primary);

  ${({ disabled }) => css`
    opacity: ${disabled ? 0.5 : 1};
  `}
`;

export { Input };
