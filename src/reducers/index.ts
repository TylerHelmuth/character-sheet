import { combineReducers } from 'redux'
import * as fromAttributes from './attributes';

export interface State {
    attributes: fromAttributes.State;
}

/*
 * initialState of the app
 */
export const initialState: State = {
    attributes: fromAttributes.initialState
}


export const rootReducer = combineReducers<State>({
    attributes: fromAttributes.reducer
});
