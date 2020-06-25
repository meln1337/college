import axios from 'axios';

const setData = payload => ({ type: 'ZAMINY/SET_DATA', payload });

export const setDataThunk = ({ course, group }) => async dispatch => {
    const lan = JSON.parse(localStorage.getItem('language'));
    if (!lan || lan === 'UA') {
        const response = await axios.get(`/api/zaminy?course=${course}&group=${group}`);
    dispatch(setData(response.data));
    } else {
        const response = await axios.get(`/api/zaminyEn?course=${course}&group=${group}`);
    dispatch(setData(response.data));
    }
};

export const changeDataThunk = ({ id, date, day, text, course, group }) => async dispatch => {
    const lan = JSON.parse(localStorage.getItem('language'));
    if (!lan || lan === 'UA') {
        await axios.put('/api/zaminy', {
            id, date, day, text
        });
        dispatch(setDataThunk({ course, group }))
    } else {
        await axios.put('/api/zaminyEn', {
            id, date, day, text
        });
        dispatch(setDataThunk({ course, group }))
    }
}