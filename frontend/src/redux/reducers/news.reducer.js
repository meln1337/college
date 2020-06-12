const initialState = {
    posts: [],
    post: []
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEWS/SET_POSTS': {
            return {
                ...state,
                posts: action.payload
            }
        }
        case 'NEWS/SET_POST': {
            return {
                ...state,
                post: action.payload
            }
        }
        default:
            return state
    }
}

export default newsReducer;