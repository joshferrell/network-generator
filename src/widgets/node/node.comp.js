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

    togglePopover = () => {
        const { node } = this.props;
        const { popoverOpen } = this.state;
        const id = popoverOpen ? null : node.id;
        this.setState({ popoverOpen: !popoverOpen });
        node.handleClick(id);
    };

    render = () => {
        const { popoverOpen } = this.state;
        const {
            name, label, id, x, y
        } = this.props.node;
        const nodeID = `node${id}`;

        const circleAttributes = {
            id: nodeID,
            fill: getColor({ text: label.toLowerCase() }),
            r: 15,
            onClick: this.togglePopover,
            className: `node ${popoverOpen && 'node-selected'}`
        };

        const popoverAttributes = {
            placement: 'top',
            isOpen: popoverOpen,
            className: 'node-popover',
            target: nodeID,
            toggle: this.togglePopover
        };

        return ([
            <circle {...circleAttributes} />,
            <Popover {...popoverAttributes}>
                <PopoverBody>
                    <strong>{name}:</strong> {label}
                    <div className="d-flex">
                        <div className="pr-3">Lat: {y}</div>
                        <div>Long: {x}</div>
                    </div>
                </PopoverBody>
            </Popover>
        ]);
    }
}

export default Node;
