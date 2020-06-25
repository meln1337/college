export const setLanguage = payload => ({ type: 'SET_LANGUAGE', payload });

export const initSetLanguageThunk = () => async dispatch => {
    const lan = JSON.parse(localStorage.getItem('language'));
    if (lan !== 'UA' && lan !== 'EN') {
        dispatch(setLanguage('UA'))
        localStorage.setItem('language', JSON.stringify('UA'))
    } else {
        dispatch(setLanguage(lan))
    }
}
export const setLanguageThunk = lan => async dispatch => {
    debugger
    localStorage.setItem('language', JSON.stringify(lan));
    dispatch(setLanguage(lan));
}