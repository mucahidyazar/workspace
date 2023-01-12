import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: 12px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-weight: 600;

  ${({ disabled }) => css`
    opacity: ${disabled ? 0.5 : 1};
  `}
`;

export { Button };
