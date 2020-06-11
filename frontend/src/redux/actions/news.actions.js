import axios from 'axios';

const setPosts = payload => ({ type: 'NEWS/SET_POSTS', payload });

export const setPostsThunk = ({ page }) => async dispatch => {
    const response = await axios.get(`/api/posts?page=${page}`);
    dispatch(setPosts(response.data));
}