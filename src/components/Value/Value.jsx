import React from "react";
import PropTypes from 'prop-types';

export const Value = ({valueGood, valueNeutral, valueBad, valueTotal, valuePositive = "0"}) => (
    <ul>
        <li>
            <p>Good: {valueGood}</p>
        </li>
        <li>
            <p>Neutral: {valueNeutral}</p>
        </li>
        <li>
            <p>Bad: {valueBad}</p>
        </li>
        <li>
            <p>Total: {valueTotal}</p>
        </li>
        <li>
            <p>Positive feedback: {valuePositive || 0}%</p>
        </li>
    </ul>
);

Value.propTypes = {
    valueGood: PropTypes.number.isRequired,
    valueNeutral: PropTypes.number.isRequired,
    valueBad: PropTypes.number.isRequired,
    valueTotal: PropTypes.number.isRequired,
    valuePositive: PropTypes.number.isRequired,
}