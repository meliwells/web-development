
export default function taskReducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {...state, tasks: [...state.tasks, action.payload]};
        case 'DELETE_TASK':
            return {...state, tasks: state.tasks.filter(task => task.id !== action.payload)};
            case 'SET_SORTING':
                return {...state, sortPreference: action.payload};
        default:
            return state;
    }
}