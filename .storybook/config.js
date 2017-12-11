import { configure, setAddon } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';
import 'bootstrap/dist/css/bootstrap.css';

const req = require.context('../src', true, /\.stories\.js$/);

setDefaults({
    inline: true
});

setAddon(infoAddon);

const loadStories = () => req.keys().forEach(filename => req(filename));

configure(loadStories, module);
