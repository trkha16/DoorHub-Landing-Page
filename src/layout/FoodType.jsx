import React from "react";
import styled from "styled-components";
import CardFoodType from "../components/card/CardFoodType";
import SubTitle from "../components/subtitle/SubTitle";
import Title from "../components/title/Title";
import { cardItems } from "../constants";

const FoodTypeStyles = styled.div`
    display: flex;
    padding: 64px 0;
    justify-content: center;
    flex-direction: column;
    .food-card {
        display: flex;
        justify-content: space-between;
    }
    .switch-btn {
        display: flex;
        justify-content: end;
        gap: 16px;
        margin-top: 45px;
        div {
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            opacity: 0.5;
            border: 1px solid #4e8dfd;
            &:hover {
                background: linear-gradient(
                    153.09deg,
                    #5390ff 10.28%,
                    #1660e6 102.17%
                );
                box-shadow: 0px 16px 40px -8px rgba(56, 126, 250, 0.28);
                svg {
                    path {
                        fill: white;
                    }
                }
                cursor: pointer;
            }
        }
        .right {
            transform: rotate(180deg);
        }
    }
`;

const FoodType = () => {
    return (
        <FoodTypeStyles>
            <Title center="center">
                More Than 20,000 Dishes <br /> To Order!
            </Title>
            <SubTitle center="center">
                Welcome to The Biggest Network of Food Ordering & Delivery
            </SubTitle>
            <div className="food-card">
                {cardItems.map((item) => (
                    <CardFoodType key={item.id} url={item.url} alt={item.alt}>
                        {item.title}
                    </CardFoodType>
                ))}
            </div>
            <div className="switch-btn">
                <div className="left">
                    <svg
                        width="9"
                        height="14"
                        viewBox="0 0 9 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9 12.3492L3.43493 7L9 1.65084L7.28254 -7.26787e-08L-6.37615e-07 7L7.28254 14L9 12.3492Z"
                            fill="url(#paint0_linear_14_3287)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_14_3287"
                                x1="8.46"
                                y1="8.68"
                                x2="-4.09593"
                                y2="6.51149"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#5391FF" />
                                <stop offset="1" stop-color="#1C65E8" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="right">
                    <svg
                        width="9"
                        height="14"
                        viewBox="0 0 9 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9 12.3492L3.43493 7L9 1.65084L7.28254 -7.26787e-08L-6.37615e-07 7L7.28254 14L9 12.3492Z"
                            fill="url(#paint0_linear_14_3287)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_14_3287"
                                x1="8.46"
                                y1="8.68"
                                x2="-4.09593"
                                y2="6.51149"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#5391FF" />
                                <stop offset="1" stop-color="#1C65E8" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </FoodTypeStyles>
    );
};

export default FoodType;
