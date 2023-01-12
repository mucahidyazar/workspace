import React, { useState, useEffect, useReducer } from 'react';
import './App.scss';

const initialState = {
  tasks: []
}

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'OPENING':
      return {
        tasks: action.payload
      }
    case 'ADD_TASK':
      return {
        tasks: [...state.tasks, action.payload]
      }
    case 'REMOVE_TASK':
      return {
        tasks: state.tasks.filter( (Task, index) => index !== action.index )
      }
    default:
      return state;
  }
}


function App() {

  const [task, setTask] = useState('');
  const [tag, setTag] = useState('');

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_TASK',
      payload: {
        task,
        tag
      }
    })
    setTask('');
    setTag('');
  }

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
      dispatch({
        type: 'OPENING',
        payload: tasks
      })      
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
    
  }, [state])

  return (
    <div className="App">
      <div className="Task">
        <form onSubmit={addTask} className="TaskForm">
          <input 
            onChange={ (e) => setTask(e.target.value) } 
            type="text" 
            name="task" 
            value={task}
            placeholder="Task" />
          <input 
            onChange={ (e) => setTag(e.target.value) }
            type="text" 
            name="tag" 
            value={tag}
            placeholder="Tags" />
          <button>Add</button>
        </form>
        <div className="TaskList">
          <div className="TaskNav">
            <div>Task</div>
            <div>Tags</div>
          </div>
          {
            state.tasks 
            ? state.tasks.map( (Task, index) => (
              <div key={Task.task + Task.tag} className="TaskExample">
                <div>{Task.task}</div>
                <div className="TaskExampleTags" onClick={ () => dispatch({ type:'REMOVE_TASK', index }) }>
                  {
                    Task.tag.split(' ').map((eactTag, index) => (
                      <span key={eactTag+index}>{eactTag}</span>
                    ) )
                  }
                </div>
              </div>
            ))
            : null
          }
        </div>
      </div>
    </div>
  );
}

export default App;
