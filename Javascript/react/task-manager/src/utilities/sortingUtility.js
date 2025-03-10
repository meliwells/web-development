export const sortTasks = (tasks, preference) => {
    switch(preference) {
        case 'high to low':
            return [...tasks].sort((a, b) => a.priority.localeCompare(b.priority));
        case 'low to high':
            return [...tasks].sort((a, b) => b.priority.localeCompare(a.priority)); 
        case 'newest to oldest':
            return [...tasks].sort((a, b) => b.id.localeCompare(a.id));
        case 'oldest to newest':
            return [...tasks].sort((a, b) => a.id.localeCompare(b.id));   
            
        default:
            return tasks;
    }
}

