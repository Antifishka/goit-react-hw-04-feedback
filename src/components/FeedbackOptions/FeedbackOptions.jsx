import React from "react";
import PropTypes from 'prop-types';
import { OptionsBtn, OptionsList } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    console.log(options);

    return <OptionsList>
        {options.map( option =>
            <li key={option}>
                <OptionsBtn
                    type="button"
                    name={option}
                    onClick={onLeaveFeedback}>{option.toUpperCase()}
                </OptionsBtn>
            </li>
        )}
    </OptionsList>
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}