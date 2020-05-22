/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import { YOUR_ACTION_CONSTANT } from './constants';

// The initial state of the App
export const initialState = {
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case YOUR_ACTION_CONSTANT:
            return state;
        default:
            return state;
    }
};

export default appReducer;
