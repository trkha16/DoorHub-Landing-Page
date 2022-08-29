import React from "react";
import styled from "styled-components";

const TitleStyles = styled.h2`
    font-style: normal;
    font-weight: 600;
    font-size: 46px;
    line-height: 58px;
    color: #2e2c49;
    text-align: ${(props) => props.center}; ;
`;

const Title = ({ children, ...props }) => {
    return <TitleStyles {...props}>{children}</TitleStyles>;
};

export default Title;
