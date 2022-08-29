import React from "react";
import styled from "styled-components";

const SubTitleStyles = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: ${(props) => props.lineHeight};
    text-align: center;
    color: #aaa7b1;
    padding: 40px 0;
    letter-spacing: 0.005em;
`;

const SubTitle = ({ children, ...props }) => {
    return <SubTitleStyles {...props}>{children}</SubTitleStyles>;
};

export default SubTitle;
