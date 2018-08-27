import { createSelector } from 'reselect'
import { State } from '../reducers';

const getAttributesState = (state: State) => state.attributes;

export const getAttributes = createSelector([getAttributesState], s => s.attributes);