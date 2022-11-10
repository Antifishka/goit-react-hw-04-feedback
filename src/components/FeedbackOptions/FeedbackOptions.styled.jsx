import styled from '@emotion/styled';

export const OptionsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-bottom: 30px;
`;

export const OptionsBtn = styled.button`
    font-weight: 700;
    font-size: 24px;
    font-family: 'DM Sans', sans-serif;
    line-height: 1.31;
    letter-spacing: .04em;
    min-width: 167px;
    padding: 10px;
    border-radius: 22px;
    border: none;
    cursor: pointer;

    color: #fff;
    background-color: #ffb8ca;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus{
        background-color: #f07f99;
    };
`;