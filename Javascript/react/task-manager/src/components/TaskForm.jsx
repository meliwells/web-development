import React, { useState } from 'react';


export default function TaskForm({dispatch}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [impact, setImpact] = useState('1');
    const [effort, setEffort] = useState('1');

    //not stored in state
    const impactLabels = {1: 'low', 2: 'high'};
    const effortLabels = {1: 'low', 2: 'high'};

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setImpact('1');
        setEffort('1');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        let priority = "";
        if (impact === "1" && effort === "1"){
           priority = "3";
        }
        if (impact === "2" && effort === "1"){
            priority = "1";
        }
        if (impact === "1" && effort === "2"){
            priority = "4";
        }
        if (impact === "2" && effort === "2"){
            priority = "2";
        }
    
        const taskData = {
            id: new Date().toISOString(),
            title,
            description,
            priority
        }
        dispatch({type: 'ADD_TASK', payload: taskData})
        console.log(taskData);
        clearForm();
    }
    
    return (
        <form className='task-form' onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input 
                value={title} 
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div>
                <label>Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className='priority-container'>
                <fieldset className='priority-fieldset'>
                    <legend>Impact</legend>
                    {Object.entries(impactLabels).map(([value, label]) => (
                        <label key={value} className='priority-label'>
                            <input
                                type="radio"
                                value={value}
                                className='priority-input'
                                checked={impact === value}
                                onChange={() => setImpact(value)}
                            />
                            {label}
                        </label>
                    ))}
                </fieldset>

                <fieldset className='priority-fieldset'>
                    <legend>Effort</legend>
                    {Object.entries(effortLabels).map(([value, label]) => (
                        <label key={value} className='priority-label'>
                            <input
                                type='radio'
                                value={value}
                                className='priority-input'
                                checked={effort === value}
                                onChange={() => setEffort(value)}
                            />
                            {label}
                        </label>
                    ))}
                </fieldset>
            </div>

            <button onClick={handleSubmit}>Add Task</button>
        </form>
    )
}