import React from "react";
import styled from "styled-components";

const TitleStyles = styled.h2`
    font-style: normal;
    font-weight: 600;
    font-size: 46px;
    line-height: 58px;
    text-align: center;
    color: #2e2c49; ;
`;

const Title = ({ children }) => {
    return <TitleStyles>{children}</TitleStyles>;
};

export default Title;
