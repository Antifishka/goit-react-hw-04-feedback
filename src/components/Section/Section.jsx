import React from "react";
import PropTypes from 'prop-types';
import { BoxSection, Title } from "./Section.styled";

export const Section = ({ title, children }) => (
    <BoxSection>
        <Title>{title}</Title>
        {children}
    </BoxSection>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
}