import axios from 'axios';

const setPosts = payload => ({ type: 'NEWS/SET_POSTS', payload });

export const setPostsThunk = ({ page }) => async dispatch => {
    const lan = JSON.parse(localStorage.getItem('language'));
    if (!lan || lan === 'UA') {
        const response = await axios.get(`/api/posts?page=${page}`);
        dispatch(setPosts(response.data));
    } else {
        const response = await axios.get(`/api/postsEn?page=${page}`);
        dispatch(setPosts(response.data));
    }
}