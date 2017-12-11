import React from 'react';
import { Graph } from '@vx/network';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable import/no-extraneous-dependencies */

import { Node } from '../.';
import Link from './link.comp';

storiesOf('Widgets/Link', module)
    .addDecorator(withKnobs)
    .add('simple node', withInfo()(() => {
        const nodes = [
            {
                id: 1,
                name: 'Trans-pecos Senna',
                label: 'Fabaceae',
                x: 50,
                y: 50
            },
            {
                id: 2,
                name: 'Trans-pecos Senna',
                label: 'Fabaceae',
                x: 100,
                y: 100
            }
        ];

        const graphData = {
            nodes,
            links: [{
                source: nodes[0],
                target: nodes[1],
                weight: text('Weight', '.29'),
                hovering: boolean('Hovering', false)
            }]
        };

        return (
            <svg width="200" height="200" style={{ padding: '1em' }}>
                <Graph
                    graph={graphData}
                    nodeComponent={Node}
                    linkComponent={Link}
                />
            </svg>
        );
    }));
