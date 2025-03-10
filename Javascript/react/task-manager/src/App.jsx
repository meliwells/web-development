import React, {useReducer, useState, useEffect} from 'react';
import './App.css';
import taskReducer from './reducer/taskReducer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import {sortTasks} from './utilities/sortingUtility.js';

export default function App() {
  const initialState = {tasks: [], sortPreference: 'high to low'};
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const sortedTasks = sortTasks(state.tasks, state.sortPreference);
  const [joke, setJoke] = useState(null);

  useEffect(() => {  //runs when page loads
    fetch('https://official-joke-api.appspot.com/jokes/programming/random', {
      method: 'GET', 
      headers: {
        
      },
    }).then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJoke(data);
      })
      .catch((error) => console.log(error));
    }, []);    

  return (
    <div className='App'>
      <div className='container'>
        <div>
          <h2>Refresh for a new joke:</h2>
          {joke && <p>{joke.setup}</p>}
          {joke && <p>{joke.punchline}</p>}
        </div>
        <h1>Task Manager</h1>
        <TaskForm dispatch={dispatch}/>
        {state.tasks.length > 0 && (
          <div className='results'>
            <h2>All Tasks</h2>
            <select value={state.sortPreference} onChange={e => dispatch({type:'SET_SORTING', payload: e.target.value})}>
              <option value='high to low'>High to Low</option>
              <option value='low to high'>Low to High</option>
              <option value='newest to oldest'>Date Created: Newest to Oldest</option>
              <option value='oldest to newest'>Date Created: Oldest to Newest</option>
            </select>

            <TaskList tasks={sortedTasks} dispatch={dispatch}/>
          </div>
        )}
       
      </div>
    </div>
  )
}

