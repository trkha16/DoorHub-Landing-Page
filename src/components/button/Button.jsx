import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background: linear-gradient(153.09deg, #5390ff 10.28%, #1660e6 102.17%);
    box-shadow: 0px 16px 40px rgba(56, 126, 250, 0.28);
    border: 1px solid #5390ff;
    padding: 0 34px;
    border-radius: 27px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    height: 54px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    &:hover {
        background: #fff;
        border: 1px solid #5390ff;
        span {
            background: linear-gradient(
                153.09deg,
                #5390ff 10.28%,
                #1660e6 102.17%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
`;

const Button = ({ children, ...props }) => {
    return (
        <ButtonStyles {...props}>
            <span>{children}</span>
        </ButtonStyles>
    );
};

export default Button;
