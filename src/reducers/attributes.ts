import { Attribute } from "../models";
import { ActionTypes, Action } from "../actions";

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

export function reducer(state: State = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.UPDATE_ATTRIBUTE: {
            const attribute = action.payload.attribute;
            return {
                ...state,
                attributes: [...state.attributes.filter(x => x.name !== attribute.name), attribute]
            };
        }
        default:
            return state;
    }
}