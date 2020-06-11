import news1 from '../../public/news1.png'
import news2 from '../../public/news2.png'
import news3 from '../../public/news3.png'
import news4 from '../../public/news4.png'

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