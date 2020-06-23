const initialState = {
    rights: []
}

const rightReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'RIGHTS/SET_RIGHTS': {
            return {
                ...state,
                rights: action.payload
            }
        }
        default: return state
    }
}

export default rightReducer