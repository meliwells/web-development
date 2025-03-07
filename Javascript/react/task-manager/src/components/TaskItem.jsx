import React from 'react';

export default function TaskItem({task, dispatch}) {
    const {id, priority, title, description} = task;

    const priorityClass = {
        1: 'priority-proceed',
        2: 'priority-investigate',
        3: 'priority-consider',
        4: 'priority-avoid'
    }

    return (
        <div className='task-item'>
            <div className={`priority-dot ${priorityClass[priority]}`}></div>
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={() => dispatch({type: 'DELETE_TASK', payload: id})}>Delete</button>
        </div>
    )
}