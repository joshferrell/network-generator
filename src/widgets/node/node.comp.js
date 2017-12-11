import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover, PopoverBody } from 'reactstrap';
import { getColor } from 'random-material-color';
import './node.css';

class Node extends Component {
    static propTypes = {
        node: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            x: PropTypes.string.isRequired,
            y: PropTypes.string.isRequired
        }).isRequired
    }

    constructor(props) {
        super(props);

        this.state = {
            popoverOpen: false
        };
    }

    toggle = () => this.setState(state => ({
        popoverOpen: !state.popoverOpen
    }));

    render = () => {
        const { popoverOpen } = this.state;
        const { name, label, id } = this.props.node;
        const nodeID = `node${id}`;

        const circleAttributes = {
            id: nodeID,
            fill: getColor({ text: label.toLowerCase() }),
            r: 15,
            onClick: this.toggle
        };

        const popoverAttributes = {
            placement: 'top',
            isOpen: popoverOpen,
            className: 'node-popover',
            target: nodeID,
            toggle: this.toggle
        };

        return ([
            <circle {...circleAttributes} />,
            <Popover {...popoverAttributes}>
                <PopoverBody>
                    <strong>{name}:</strong> {label}
                </PopoverBody>
            </Popover>
        ]);
    }
}

export default Node;
