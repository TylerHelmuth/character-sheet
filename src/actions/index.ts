import { Attribute } from "../models";

export enum ActionTypes {
    UPDATE_ATTRIBUTE = '[ATTRIBUTES] Update Attribute'
}

export interface UpdateAttributeAction { 
    type: ActionTypes.UPDATE_ATTRIBUTE, 
    payload: { attribute: Attribute } 
}



export function updateAttribute(attribute: Attribute) {
    return {
        type: ActionTypes.UPDATE_ATTRIBUTE,
        payload: {
            attribute: attribute
        }
    }
}

export type Action = UpdateAttributeAction;