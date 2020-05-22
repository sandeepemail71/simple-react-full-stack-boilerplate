/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import appReducer from './containers/App/reducer';
import homeReducer from './containers/Home/reducer';

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    appReducer,
    homeReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
