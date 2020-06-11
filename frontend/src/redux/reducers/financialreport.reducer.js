const initialState = {
    links: []
};

const financialReport = (state = initialState, action) => {
    switch(action.type) {
        case 'FINANCIAL_REPORT/SET_DATA': {
            return {
                ...state,
                links: action.payload
            }
        }
        default: return state
    };
};

export default financialReport;