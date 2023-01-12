import styled, { css } from 'styled-components';

const InputField = styled.input`
  background-color: var(--gray);
  border: none;
  border-radius: 5px;
  color: var(--gray-dark);
  outline: none;
  padding: 16px 12px;
`;

const InputText = styled.p`
  color: var(--gray-dark);
  font-size: var(--size-xs);
`;

const Input = styled.div<{ error: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;

  ${({ error }) =>
    error &&
    css`
      ${InputField} {
        border: 1px solid var(--danger);
      }

      ${InputText} {
        color: var(--danger);
      }
    `};
`;

export { Input, InputField, InputText };
