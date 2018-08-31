import * as React from "react";
import { Row } from 'antd';
import { Attribute } from "../../models";
import { AttributeComponent } from "./AttributeComponent";

interface Props {
    attributes: Attribute[];
    updateAttribute: (attribute: Attribute) => void;
}

interface State { 
    value: number;
}

export class AttributeSectionComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const attributes = this.props.attributes;
        
        attributes.sort((a, b) => {
            const order = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];

            return order.indexOf(a.name) - order.indexOf(b.name);
        });

        return <Row type="flex" justify="space-between" align="middle" gutter={16}>
            {attributes.map(attribute => (
                <AttributeComponent
                    key={attribute.name}
                    name={attribute.name}
                    value={attribute.value.toString()}
                    modifier={this.getModifier(attribute.value)}
                    onSave={this.props.updateAttribute}
                />
            ))}
        </Row>
    }

    private getModifier(attribute: number): string {
        const value = Math.floor((attribute - 10) / 2);
        return value > 0 ? `+${value}` : value.toString();
    }
}