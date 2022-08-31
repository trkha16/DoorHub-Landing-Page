import React from "react";
import styled from "styled-components";

const TitleStyles = styled.h2`
    font-style: normal;
    font-weight: 600;
    font-size: 46px;
    line-height: 58px;
    color: ${(props) => props.color};
    text-align: ${(props) => props.center}; ;
`;

const Title = ({ children, color = "#2e2c49", ...props }) => {
    return (
        <TitleStyles color={color} {...props}>
            {children}
        </TitleStyles>
    );
};

export default Title;
