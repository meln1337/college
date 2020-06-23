import axios from 'axios'
import { setFinancialLinksThunk } from './financialreport.actions';

export const uploadFileThunk = ({ file, text }) => async dispatch => {
    const formData = new FormData();
    formData.set('image', file);
    formData.set('text', text);
    const response = await axios.post('/api/upload', formData);
    console.log(response)
    dispatch(setFinancialLinksThunk())
}