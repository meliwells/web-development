export const sortTasks = (tasks, preference) => {
    switch(preference) {
        case 'high to low':
            return [...tasks].sort((a, b) => a.priority - b.priority);
        case 'low to high':
            return [...tasks].sort((a, b) => b.priority - a.priority); 
        case 'newest to oldest':
            return [...tasks].sort((a, b) => b.date.localeCompare(a.date));
        case 'oldest to newest':
            return [...tasks].sort((a, b) => a.date.localeCompare(b.date));   
            
        default:
            return tasks;
    }
}

