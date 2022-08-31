import React from "react";
import styled from "styled-components";

const SubTitleStyles = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: ${(props) => props.lineHeight};
    text-align: ${(props) => props.center};
    color: ${(props) => props.color};
    padding: 40px 0;
    letter-spacing: 0.005em;
`;

const SubTitle = ({ children, color = "#aaa7b1", ...props }) => {
    return (
        <SubTitleStyles color={color} {...props}>
            {children}
        </SubTitleStyles>
    );
};

export default SubTitle;
