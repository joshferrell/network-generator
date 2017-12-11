import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';
import randomColor from 'random-material-color';
import blender from 'color-blend';

const getColor = (label, a) => {
    const color = randomColor.getColor({ text: label.toLowerCase() });
    return Object.assign({}, Color(color).object(), { a });
};

const blendColor = (label1, label2) => {
    const sourceColor = getColor(label1, .4);
    const targetColor = getColor(label2, .8);
    console.log(sourceColor, targetColor);

    const blend = blender.normal(sourceColor, targetColor);
    delete blend.a;
    console.log(blend);
    return Color(blend).hex();
};

const Link = ({ link }) => {
    const {
        source, target, hovering, weight
    } = link;

    const hoverStroke = blendColor(source.label, target.label);
    console.log(hoverStroke);

    return (
        <line
            x1={source.x}
            y1={source.y}
            x2={target.x}
            y2={target.y}
            strokeWidth={hovering ? 5 : 2}
            stroke={hovering ? hoverStroke : '#2B2B2B'}
            strokeOpacity={weight}
        />
    );
};

const nodeShape = PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired
});

Link.propTypes = {
    link: PropTypes.shape({
        source: nodeShape,
        target: nodeShape,
        hovering: PropTypes.bool,
        weight: PropTypes.number.isRequired
    }).isRequired
};

Link.defaultProps = {
    hovering: false
};

export default Link;
