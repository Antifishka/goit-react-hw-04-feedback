import styled from '@emotion/styled';

export const OptionsList = styled.ul`
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
`;

export const OptionsBtn = styled.button`
    border: none;
    outline: none;
    padding: 10px 15px;
    cursor: pointer;

    background-color: teal;
    color:#fff;

    font-weight:500;
    font-family:inherit;
    
    box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);

    transition: box-shadow 250ms linear;

    &:active{
        box-shadow: 2px 5px 2px 0 rgb(0 0 0 / 0.5);
    };
`;