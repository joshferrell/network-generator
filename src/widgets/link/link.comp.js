import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';
import randomColor from 'random-material-color';
import blender from 'color-blend';
import './link.css';

const getColor = (label, a) => {
    const color = randomColor.getColor({ text: label.toLowerCase() });
    return Object.assign({}, Color(color).object(), { a });
};

const blendColor = (label1, label2) => {
    const sourceColor = getColor(label1, 0.4);
    const targetColor = getColor(label2, 0.8);

    const { a, ...blend } = blender.normal(sourceColor, targetColor);
    return Color(blend).hex();
};

const Link = ({ link }) => {
    const {
        source, target, hovering, weight, label
    } = link;

    let stroke = '#2B2B2B';
    const hoverStroke = label ?
        randomColor.getColor({ text: label.toLowerCase() }) :
        blendColor(source.label, target.label);

    if (label) {
        stroke = hoverStroke;
    } else if (hovering) {
        stroke = hoverStroke;
    }

    return (
        <line
            className="link"
            x1={source.x}
            y1={source.y}
            x2={target.x}
            y2={target.y}
            strokeWidth={hovering ? 5 : 2}
            stroke={stroke}
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

export default Link;
