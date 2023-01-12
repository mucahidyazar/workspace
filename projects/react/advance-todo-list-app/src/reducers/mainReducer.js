import {
    ADD_TODO_TASK,
    ADD_TODO_DOING,
    ADD_TODO_DONE,
    ADD_TODO_ARCHIVE
} from './actions/actionTypes';

const initialState = {
    todoTask: [],
    todoDoing: [],
    todoDone: [],
    todoArchive: []
}

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO_TASK:
            const newTask = {
                id: '_' + Math.random().toString(36).substr(2, 9),
                task: action.task,
                who: action.who
            }
            return {
                ...state,
                todoTask: [...state.todoTask, newTask]
            }
        case ADD_TODO_DOING:
            const updatedTodoTask = state.todoTask.filter( Task => Task.id !== action.todo.id);
            return {
                ...state,
                todoTask: updatedTodoTask,
                todoDoing: [...state.todoDoing, action.todo]
            }
        case ADD_TODO_DONE:
            const updatedTodoDoing = state.todoDoing.filter( Task => Task.id !== action.todo.id );
            return {
                ...state,
                todoDoing: updatedTodoDoing,
                todoDone: [...state.todoDone, action.todo]
            }
        case ADD_TODO_ARCHIVE:
            const updatedTodoDone = state.todoDone.filter( Task => Task.id !== action.todo.id );
            return {
                ...state,
                todoDone: updatedTodoDone,
                todoArchive: [...state.todoArchive, action.todo]
            }
            
        default:
            return state;
    }
}

export default mainReducer;