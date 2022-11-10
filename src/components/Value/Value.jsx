import React from "react";
import PropTypes from 'prop-types';
import { ValueList, ValueItem, ValueText } from "./Value.styled";

export const Value = ({valueGood, valueNeutral, valueBad, valueTotal, valuePositive = "0"}) => (
    <ValueList>
        <ValueItem>
            <ValueText>Good: {valueGood}</ValueText>
        </ValueItem>
        <ValueItem>
            <ValueText>Neutral: {valueNeutral}</ValueText>
        </ValueItem>
        <ValueItem>
            <ValueText>Bad: {valueBad}</ValueText>
        </ValueItem>
        <ValueItem>
            <ValueText>Total: {valueTotal}</ValueText>
        </ValueItem>
        <ValueItem>
            <ValueText>Positive feedback: {valuePositive || 0}%</ValueText>
        </ValueItem>
    </ValueList>
);

Value.propTypes = {
    valueGood: PropTypes.number.isRequired,
    valueNeutral: PropTypes.number.isRequired,
    valueBad: PropTypes.number.isRequired,
    valueTotal: PropTypes.number.isRequired,
    valuePositive: PropTypes.number.isRequired,
}