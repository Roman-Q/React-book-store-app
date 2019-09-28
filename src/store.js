import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';

import rootReducer from './reducers';

export default () => {
    const store = createStore(rootReducer, applyMiddleware(logger));//передаем все редюсеры указывая намерение для изменения х-а при диспатче действий
    return store;
};




