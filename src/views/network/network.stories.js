import React from 'react';
import { Graph, DefaultLink } from '@vx/network';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
/* eslint-enable import/no-extraneous-dependencies */

import Network from './network.comp';

storiesOf('Views/Network', module)
    .addDecorator(withKnobs)
    .add('simple network', withInfo()(() => <Network />));
