import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable import/no-extraneous-dependencies */

import Legend from './legend.comp';

storiesOf('Widgets/Legend', module)
    .addDecorator(withKnobs)
    .add('simple legend', withInfo()(() => {
        const names = [
            text('Name1', 'Something'),
            text('Name2', 'Another Name')
        ];

        return (
            <Legend
                names={names}
                title={text('Legend Title', 'Simple Legend')}
            />
        );
    }));
