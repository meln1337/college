import axios from 'axios';

const setData = payload => ({ type: 'SCHEDULE/SET_DATA', payload });

export const setDataThunk = ({ course, group }) => async dispatch => {
    const response = await axios.get(`http://localhost:5000/api/schedules?course=${course}&group=${group}`);
    dispatch(setData(response.data));
};

export const changeDataThunk = ({ id, date, day, text, course, group }) => async dispatch => {
    await axios.put('http://localhost:5000/api/schedules', {
        id, date, day, text
    });
    dispatch(setDataThunk({ course, group }))
};