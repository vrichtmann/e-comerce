import {compose, createStore, applyMiddlewere} from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

//root-reducer
const middleWeres = [logger];

const composeEnhancers = compose(applyMiddlewere(...middleWeres));

export const store = createStore(rootReducer, undefined, composeEnhancers);