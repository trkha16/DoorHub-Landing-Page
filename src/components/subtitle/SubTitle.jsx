import React from "react";
import styled from "styled-components";

const SubTitleStyles = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    color: #aaa7b1;
    padding: 40px 0;
`;

const SubTitle = ({ children }) => {
    return <SubTitleStyles>{children}</SubTitleStyles>;
};

export default SubTitle;
