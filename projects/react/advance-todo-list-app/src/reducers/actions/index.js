import * as actionTypes from './actionTypes';

export const ADD_TODO_TASK = (task, who) => ({
    type: actionTypes.ADD_TODO_TASK,
    task,
    who
});

export const ADD_TODO_DOING = (todo) => ({
    type: actionTypes.ADD_TODO_DOING,
    todo
});

export const ADD_TODO_DONE = (todo) => ({
    type: actionTypes.ADD_TODO_DONE,
    todo
});

export const ADD_TODO_ARCHIVE = (todo) => ({
    type: actionTypes.ADD_TODO_ARCHIVE,
    todo
});