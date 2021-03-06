const initialState = {
    user: {}
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'AUTH/SET_USER': {
            return {
                ...state,
                user: action.payload
            }
        }
        default: return state
    }
}

export default authReducer