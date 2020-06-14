const initialState = {
    consultation: {}
}

const consultationReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CONSULTATION/SET_DATA': {
            debugger
            return {
                ...state,
                consultation: {
                    ...state.consultation,
                    [action.payload.group]: action.payload.cons
                }
            }
        }
        default: return state;
    }
}

export default consultationReducer;