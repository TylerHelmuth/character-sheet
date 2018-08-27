import { IAction } from "../actions";
import { Attribute } from "../models";

export interface State {
    attributes: Attribute[]
}

export const initialState: State = {
    attributes: [
        {
            name: 'strength',
            value: 19
        },
        {
            name: 'dexterity',
            value: 13
        },
        {
            name: 'constitution',
            value: 14
        },
        {
            name: 'intelligence',
            value: 5
        },
        {
            name: 'wisdom',
            value: 8
        },
        {
            name: 'charisma',
            value: 9
        }
    ]
}

export function reducer(state: State = initialState, action: IAction) {
    switch (action.type) {
        default:
            return state;
    }
}