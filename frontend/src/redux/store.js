import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import languageReducer from './reducers/language.reducer';
import newsReducer from './reducers/news.reducer';
import financialReportReducer from './reducers/financialreport.reducer';

const rootReducer = combineReducers({
    languageReducer,
    newsReducer,
    financialReportReducer
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