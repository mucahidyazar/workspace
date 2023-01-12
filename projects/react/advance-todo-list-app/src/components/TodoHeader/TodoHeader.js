import React from 'react';
import './TodoHeader.scss';
import TodoForm from './TodoForm/TodoForm';
import TodoNav from './TodoNav/TodoNav';

const TodoHeader = () => {
    return (
        <div className="TodoHeader">
            <TodoNav />
            <TodoForm />
        </div>
    );
}

export default TodoHeader;
