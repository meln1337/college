const initialState = {
    zaminy: []
}

const zaminyReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ZAMINY/SET_DATA': {
            return {
                ...state,
                zaminy: {
                    ...state.zaminy,
                    [action.payload.course]: {
                        ...state.zaminy[action.payload.course],
                        [action.payload.group]: action.payload.zaminy
                    }
                }
            }
        }
        default: return state
    }
}

export default zaminyReducer;