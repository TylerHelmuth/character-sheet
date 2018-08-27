import * as React from "react";
import { Attribute } from "../models";

interface Props {
    attributes: Attribute[];
}

interface State { }

export class AttributeComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    public render() {
        const attributes = this.props.attributes;

        return <div>
            {attributes.map(attribute => (<p>{attribute.name}: {attribute.value}</p>))}
        </div>
    }
}