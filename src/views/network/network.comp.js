import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Graph } from '@vx/network';
import { Link, Legend, Node } from '../../widgets';

class Network extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedNode: null
        };
    }

    handleNodeSelect = (id) => {
        console.log(id);
        this.setState({ selectedNode: id });
    }

    render() {
        const nodes = [
            {
                id: 1,
                name: 'Trans-pecos Senna',
                label: 'asdlkfjalksdfjasdklfjdavn',
                x: 50,
                y: 50
            },
            {
                id: 2,
                name: 'Trans-pecos Senna',
                label: 'Sphagnaceae',
                x: 100,
                y: 100
            },
            {
                id: 3,
                name: 'Trans-pecos Senna',
                label: 'Fabaceae',
                x: 150,
                y: 150
            }
        ];

        const links = [
            {
                source: nodes[0],
                target: nodes[1],
                weight: '.2',
                label: 'boopsdf'
            },
            {
                source: nodes[1],
                target: nodes[2],
                weight: '.59',
                label: 'asdf'
            }
        ];

        const graphData = {
            nodes: nodes.map(node => Object.assign({}, node, { handleClick: this.handleNodeSelect })),
            links: links.map((link) => {
                const { selectedNode } = this.state;
                console.log(selectedNode);
                const { source, target } = link;
                return Object.assign({}, link, {
                    hovering: source.id === selectedNode || target.id === selectedNode
                });
            })
        };

        return (
            <div>
                <svg width="500" height="500">
                    <Graph
                        graph={graphData}
                        nodeComponent={Node}
                        linkComponent={Link}
                    />
                </svg>
                <Legend title="Nodes" names={nodes.map(({ label }) => label)} />
                <Legend title="Edges" names={links.map(({ label }) => label)} />
            </div>
        );
    }
}

export default Network;
