

const getTasks = () => {
    return fetch('http://localhost:8080/tasks', 
        {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
}

const postTask = (task) => {
    return fetch('http://localhost:8080/tasks', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(task)
    })
    .then(response => response.json())
}

const deleteTask = (id) => {
    return fetch('http://localhost:8080/tasks/' + id, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/jason'},
    })
        .then(response => response.ok)
}

export {getTasks, postTask, deleteTask}