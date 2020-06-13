import axios from 'axios'

const setAuthAC = payload => ({ type: 'AUTH/SET_USER', payload });

export const setAuth = user => async dispatch => {
    const response = await axios.post('/auth/login', user);
    dispatch(setAuthAC(response.data))
}