import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

//root-reducer
const middleWeres = [logger];

const composeEnhancers = compose(applyMiddleware(...middleWeres));

export const store = createStore(rootReducer, undefined, composeEnhancers);