import styled from 'styled-components';

const Todo = styled.li`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const TodoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const TodoTitle = styled.span`
  font-size: var(--size-lg);
`;
const TodoDate = styled.span`
  color: var(--gray-dark);
  font-size: var(--size-sm);
`;
const TodoActions = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`;
const TodoCheckbox = styled.input`
  border: 1px solid var(--primary);
  border-radius: 50%;
`;
const TodoDelete = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: var(--size-3xl);
  outline: none;
`;

export { Todo, TodoActions, TodoCheckbox, TodoContent, TodoDate, TodoDelete, TodoTitle };
