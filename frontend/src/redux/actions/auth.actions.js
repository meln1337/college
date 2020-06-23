import axios from 'axios'

const setAuthAC = payload => ({ type: 'AUTH/SET_USER', payload });

export const setAuth = user => async dispatch => {
    const response = await axios.post('/auth/login', user);
    dispatch(isAuth())
}

export const setRegister = user => async dispatch => {
    const response = await axios.post('/auth/register', user);
} 

export const isAuth = () => async dispatch => {
    axios.defaults.withCredentials = true
    const response = await axios.post('/auth/me');
    dispatch(setAuthAC(response.data))
    console.log(response);
}