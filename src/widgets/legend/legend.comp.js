import React from 'react';
import PropTypes from 'prop-types';
import { getColor } from 'random-material-color';
import { LegendOrdinal } from '@vx/legend';
import { scaleOrdinal } from '@vx/scale';
import './legend.css';

const Legend = ({ names, title }) => {
    const ordinalColor = scaleOrdinal({
        domain: names,
        range: names.map(name => getColor({ text: name }))
    });

    return (
        <section className="legend p-3">
            <h4 className="legend-title">{title}</h4>
            <LegendOrdinal
                direction="column"
                itemDirection="row"
                shapeMargin="0"
                labelMargin="0 0 0 4px"
                itemMargin="0 5px"
                scale={ordinalColor}
                shape="rect"
                fill={({ datum }) => ordinalColor(datum)}
                labelFormat={label => `${label.toUpperCase()}`}
            />
        </section>
    );
};

Legend.propTypes = {
    names: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired
};

export default Legend;
