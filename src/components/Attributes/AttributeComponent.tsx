import * as React from "react";
import { Col } from 'antd';
import { Attribute } from "../../models";

interface Props {
    name: string;
    value: string;
    modifier: string;

    onSave: (payload: Attribute) => void;
}

interface State {
    value: string;
}

export class AttributeComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            value: this.props.value
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    public render() {
        const { value } = this.state
        const { name, modifier } = this.props;

        return <Col span={4} key={name} style={attributeStyles}>
            <small >{name.toUpperCase()}</small>
            <h1 className="m-1">{modifier}</h1>
            <input className="m-1"
                style={inputStyles} value={value}
                onChange={this.handleChange}
                onBlur={this.handleBlur} />
        </Col>
    }

    private handleChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({
            value: e.currentTarget.value
        })
    }

    private handleBlur(e: React.FormEvent<HTMLInputElement>) {
        this.props.onSave({
            name: this.props.name,
            value: +e.currentTarget.value
        });
    }
}

const attributeStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'center',
    border: '1px solid grey',
    borderRadius: '.5rem'
}

const inputStyles: React.CSSProperties = {
    width: '15%',
    textAlign: 'center',
    borderRadius: '12px',
    borderColor: '#c1c1c1',
    borderWidth: '1px',
    borderStyle: 'solid'
}