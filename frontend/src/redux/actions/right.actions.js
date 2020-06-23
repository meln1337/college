import axios from 'axios'

const setRightsAC = payload => ({ type: 'RIGHTS/SET_RIGHTS', payload })

export const setRights = () => async dispatch => {
    const response = await axios.get('/api/rights')
    dispatch(setRightsAC(response.data))
}

export const addRight = right => async dispatch => {
    const response = await axios.post('/api/rights', right)
    dispatch(setRights())
}