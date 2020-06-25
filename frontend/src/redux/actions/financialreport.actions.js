import axios from 'axios';

const setFinancialLinks = payload => ({ type: 'FINANCIAL_REPORT/SET_DATA', payload });

export const setFinancialLinksThunk = () => async dispatch => {
    const lan = JSON.parse(localStorage.getItem('language'));
    if (!lan || lan === 'UA') {
        const response = await axios.get('/api/financial-links');
        dispatch(setFinancialLinks(response.data));
    } else {
        const response = await axios.get('/api/financial-linksEn');
        dispatch(setFinancialLinks(response.data));
    }
};

export const addFinancialLinksThunk = ({ text, link }) => async dispatch => {
    const lan = JSON.parse(localStorage.getItem('language'));
    if (!lan || lan === 'UA') {
        await axios.post('/api/financial-links', {
            text, link
        });
        dispatch(setFinancialLinksThunk());
    } else {
        await axios.post('/api/financial-linksEn', {
            text, link
        });
        dispatch(setFinancialLinksThunk());
    }
};

export const deleteFinancialLinksThunk = ({ id }) => async dispatch => {
    const lan = JSON.parse(localStorage.getItem('language'));
    if (!lan || lan === 'UA') {
        await axios.delete(`/api/financial-links/${id}`);
    dispatch(setFinancialLinksThunk());
    } else {
        await axios.delete(`/api/financial-linksEn/${id}`);
    dispatch(setFinancialLinksThunk());
    }
};