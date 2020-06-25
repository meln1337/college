import axios from 'axios'

const setDataAC = payload => ({ type: 'CONSULTATION/SET_DATA', payload });

export const setDataThunk = ({ group }) => async dispatch => {
    const lan = JSON.parse(localStorage.getItem('language'));
    if (!lan || lan === 'UA') {
        const response = await axios.get(`/api/consultation/${group}`);
        dispatch(setDataAC(response.data));
    } else {
        const response = await axios.get(`/api/consultationEn/${group}`);
    dispatch(setDataAC(response.data));
    }
}

export const changeDataThunk = ({ id, date, day, text, group }) => async dispatch => {
    const lan = JSON.parse(localStorage.getItem('language'));
    if (!lan || lan === 'UA') {
        await axios.put('/api/consultation', {
            id, date, day, text
        });
        dispatch(setDataThunk({ group }));
    } else {
        await axios.put('/api/consultationEn', {
            id, date, day, text
        });
        dispatch(setDataThunk({ group }));
    }
};