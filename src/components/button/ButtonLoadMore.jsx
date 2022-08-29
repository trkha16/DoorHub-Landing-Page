import React from "react";
import styled from "styled-components";

const ButtonLoadMoreStyles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    width: ${(props) => props.width};
    padding: 5px 10px;
    padding-left: 20px;
    box-sizing: border-box;
    background: linear-gradient(153.09deg, #5390ff 10.28%, #1660e6 102.17%);
    box-shadow: 0px 4px 12px rgba(56, 126, 250, 0.2);
    border-radius: 27px;
    cursor: pointer;
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        background-color: #fff;
        border-radius: 50%;
    }
`;

const ButtonLoadMore = ({ children, ...props }) => {
    return (
        <ButtonLoadMoreStyles {...props}>
            {children}
            <span>
                <svg
                    width="9"
                    height="14"
                    viewBox="0 0 9 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M-7.45373e-08 12.3492L5.56507 7L-5.57581e-07 1.65084L1.71746 -7.26787e-08L9 7L1.71746 14L-7.45373e-08 12.3492Z"
                        fill="#4585F9"
                    />
                </svg>
            </span>
        </ButtonLoadMoreStyles>
    );
};

export default ButtonLoadMore;
