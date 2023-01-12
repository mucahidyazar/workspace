import styled, { css } from 'styled-components';

const Checkbox = styled.div<{
  checked: boolean;
}>`
  border: 2px solid var(--secondary);
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  transition: all 0.2s ease-in-out;
  width: 20px;

  ${({ checked }) =>
    checked &&
    css`
      background-color: var(--secondary);
    `}

  &:hover {
    background-color: var(--gray);

    ${({ checked }) =>
    checked &&
    css`
        background-color: var(--secondary-hover);
      `}
  }
`;

export { Checkbox };
