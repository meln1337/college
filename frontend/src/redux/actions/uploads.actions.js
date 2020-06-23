import axios from 'axios'
import { setFinancialLinksThunk } from './financialreport.actions';

export const uploadFileThunk = ({ file, text }) => async dispatch => {
    const response = await axios.post('/api/upload', { file, text }, {
        headers: 'multipart/form-data'
    });
    console.log(response)
    dispatch(setFinancialLinksThunk())
}