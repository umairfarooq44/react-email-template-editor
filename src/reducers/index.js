import { combineReducers } from 'redux';

import templates from './templateReducer';

const rootReducer = combineReducers({
  templates,
});

export default rootReducer;
