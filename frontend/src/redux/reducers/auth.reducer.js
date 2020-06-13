const initialState = {
    token: ''
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'AUTH/SET_USER': {
            return {
                ...state,
                token: action.payload
            }
        }
        default: return state
    }
}

export default authReducer