import React, {useContext} from 'react';
import {deleteTask} from '../utilities/apiUtilities.js';
import UserContext from '../context/UserContext.js';

export default function TaskItem({task, dispatch}) {
    const {id, date, priority, title, description} = task;
    const {username, isAdmin} = useContext(UserContext);

    const priorityClass = {
        1: 'priority-proceed',
        2: 'priority-investigate',
        3: 'priority-consider',
        4: 'priority-avoid'
    }
    const handleDelete = (e) => {
        e.preventDefault();
        if(deleteTask(id)){
            dispatch({type: 'DELETE_TASK', payload: id});
        } else {
            console.log('Error deleting task')
        }    
    };


    return (
        <div className='task-item'>
            <div className={'card-container'}>
                <div className={`priority-dot ${priorityClass[priority]}`}></div>
                <div className={'creation-date'}>
                    <em>{date.substring(0, 10)}</em>
                </div>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            {isAdmin && <button onClick={handleDelete}>Delete</button>}
        </div>
    )
}