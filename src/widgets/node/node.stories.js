import React from 'react';
import { Graph, DefaultLink } from '@vx/network';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable import/no-extraneous-dependencies */

import Node from './node.comp';

storiesOf('Widgets/Node', module)
    .addDecorator(withKnobs)
    .add('simple node', withInfo()(() => {
        const graphData = {
            nodes: [{
                id: number('Node ID', 1),
                name: text('Name', 'Trans-pecos Senna'),
                label: text('Label', 'Fabaceae'),
                x: number('Longitude', 50),
                y: number('Latitude', 50)
            }],
            links: []
        };

        return (
            <svg width="100" height="100" style={{ padding: '1em' }}>
                <Graph
                    graph={graphData}
                    nodeComponent={Node}
                    linkComponent={DefaultLink}
                />
            </svg>
        );
    }));
