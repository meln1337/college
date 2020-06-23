import axios from 'axios';

const setFinancialLinks = payload => ({ type: 'FINANCIAL_REPORT/SET_DATA', payload });

export const setFinancialLinksThunk = () => async dispatch => {
    const response = await axios.get('/api/financial-links');
    dispatch(setFinancialLinks(response.data));
};

export const addFinancialLinksThunk = ({ text, link }) => async dispatch => {
    await axios.post('/api/financial-links', {
        text, link
    });
    dispatch(setFinancialLinksThunk());
};