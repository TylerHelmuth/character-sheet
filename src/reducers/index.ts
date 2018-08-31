import { combineReducers } from 'redux'
import * as fromAttributes from './attributes';
import { Action } from '../actions';

export interface State {
    attributes: fromAttributes.State;
}

/*
 * initialState of the app
 */
export const initialState: State = {
    attributes: fromAttributes.initialState
}

export const rootReducer = combineReducers<State, Action>({
    attributes: fromAttributes.reducer
});
