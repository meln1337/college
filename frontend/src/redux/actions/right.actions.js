import axios from 'axios'

const setRightsAC = payload => ({ type: 'RIGHTS/SET_RIGHTS', payload })

export const setRights = () => async dispatch => {
    const lan = JSON.parse(localStorage.getItem('language'));
    if (!lan || lan === 'UA') {
        const response = await axios.get('/api/rights')
    dispatch(setRightsAC(response.data))
    } else {
        const response = await axios.get('/api/rightsEn')
    dispatch(setRightsAC(response.data))
    }
}

export const addRight = right => async dispatch => {
    const lan = JSON.parse(localStorage.getItem('language'));
    if (!lan || lan === 'UA') {
        const response = await axios.post('/api/rights', right)
    dispatch(setRights())
    } else {
        const response = await axios.post('/api/rightsEn', right)
    dispatch(setRights())
    }
}

export const deleteRightThunk = ({ id }) => async dispatch => {
    const lan = JSON.parse(localStorage.getItem('language'));
    if (!lan || lan === 'UA') {
        await axios.delete(`/api/rights/${id}`);
    dispatch(setRights());
    } else {
        await axios.delete(`/api/rightsEn/${id}`);
    dispatch(setRights());
    }
};