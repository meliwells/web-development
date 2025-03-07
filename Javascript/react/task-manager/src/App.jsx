import React, {useReducer} from 'react';
import './App.css';
import taskReducer from './reducer/taskReducer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export default function App() {
  const [state, dispatch] = useReducer(taskReducer, {tasks: []});

  return (
    <div className='App'>
      <div className='container'>
        <h1>Task Manager</h1>
        <TaskForm dispatch={dispatch}/>
        <h2>All Tasks</h2>
        <TaskList tasks={state.tasks} dispatch={dispatch}/>
      </div>
    </div>
  )
}

