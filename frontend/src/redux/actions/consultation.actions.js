import axios from 'axios'

const setDataAC = payload => ({ type: 'CONSULTATION/SET_DATA', payload });

export const setDataThunk = ({ group }) => async dispatch => {
    debugger
    const response = await axios.get(`/api/consultation/${group}`);
    dispatch(setDataAC(response.data));
}

export const changeDataThunk = ({ id, date, day, text, group }) => async dispatch => {
    await axios.put('/api/consultation', {
        id, date, day, text
    });
    dispatch(setDataThunk({ group }));
};