import React from 'react';
import './TodoMenu.scss';
import TodoTasks from './TodoTasks/TodoTasks';
import TodoDoing from './TodoDoing/TodoDoing';
import TodoDone from './TodoDone/TodoDone';

const TodoMenu = () => {
    return (
        <div className="TodoMenu">
            <TodoTasks />
            <TodoDoing />
            <TodoDone />
        </div>
    );
}

export default TodoMenu;
