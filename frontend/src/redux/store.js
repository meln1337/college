import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import languageReducer from './reducers/language.reducer';
import newsReducer from './reducers/news.reducer';
import financialReportReducer from './reducers/financialreport.reducer';
import scheduleReducer from './reducers/schedule.reducer';
import zaminyReducer from './reducers/zaminy.reducer';
import authReducer from './reducers/auth.reducer';
import consultationReducer from './reducers/consultation.reducer';

const rootReducer = combineReducers({
    languageReducer,
    newsReducer,
    financialReportReducer,
    scheduleReducer,
    zaminyReducer,
    authReducer,
    consultationReducer
})

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
)

const store = createStore(
    rootReducer,
    enhancer
)

export default store