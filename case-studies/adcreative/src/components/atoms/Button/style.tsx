import styled from 'styled-components';

const Button = styled.button`
  background-color: var(--secondary);
  border: none;
  border-radius: 5px;
  color: var(--white);
  cursor: pointer;
  height: 50px;
  outline: none;
  padding: 0 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--secondary-hover);
  }
`;

export { Button };
