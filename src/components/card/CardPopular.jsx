import React from "react";
import styled from "styled-components";

const CardPopularStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #e6f0ff;
    border-radius: 28px;
    padding: 30px 34px;
    cursor: pointer;
    .card-image {
        width: 210px;
        height: 210px;
        border-radius: 50%;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: inherit;
        }
    }
    .card-title {
        max-width: 240px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 34px;
        color: #4d4c66;
        padding: 40px 0;
        text-align: center;
    }
    .card-cost {
        display: flex;
        justify-content: space-between;
        width: 100%;
        .cost {
            font-weight: 600;
            font-size: 24px;
            line-height: 24px;
            color: #2e2c49;
        }
        .add-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 38px;
            height: 38px;
            background: linear-gradient(
                138.79deg,
                #b0cfff 8.47%,
                #82b2fe 81.99%
            );
            border-radius: 8px;
        }
    }
    &:hover {
        background: linear-gradient(138.79deg, #b0cfff 8.47%, #82b2fe 81.99%);
        box-shadow: 0px 28px 63px -13px rgba(80, 136, 225, 0.29);
        .card-title {
            color: #fff;
        }
        .card-cost {
            .cost {
                color: #fff;
            }
            .add-btn {
                background: #fff;
                svg {
                    path {
                        stroke: #485eb5;
                    }
                }
            }
        }
    }
`;

const CardPopular = ({ url, title, price }) => {
    return (
        <CardPopularStyles>
            <div className="card-image">
                <img src={url} alt="food" />
            </div>
            <div className="card-title">
                <p>{title}</p>
            </div>
            <div className="card-cost">
                <span className="cost">${price}</span>
                <div className="add-btn">
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2 11L20 11"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M11 2L11 20"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </CardPopularStyles>
    );
};

export default CardPopular;
