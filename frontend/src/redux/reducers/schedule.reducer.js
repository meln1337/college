const initialState = {
    schedules: []
}

const scheduleReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SCHEDULE/SET_DATA': {
            return {
                ...state,
                schedules: {
                    ...state.schedules,
                    [action.payload.course]: {
                        ...state.schedules[action.payload.course],
                        [action.payload.group]: action.payload.schedules
                    }
                }
            }
        }
        default: return state
    }
}

export default scheduleReducer;