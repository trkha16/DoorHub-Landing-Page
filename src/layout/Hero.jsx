import React from "react";
import styled from "styled-components";
import bannerImage from "../assets/illustration.png";

const HeroStyles = styled.div`
    display: flex;
    padding: 64px 0;

    .content {
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: center;
        h1 {
            font-style: normal;
            font-weight: 700;
            font-size: 70px;
            line-height: 82px;
            letter-spacing: -0.005em;
            color: #2e2c49;
            margin-bottom: 16px;
        }
        p {
            font-weight: 400;
            font-size: 20px;
            line-height: 32px;
            letter-spacing: -0.015em;
            color: #7b7e90;
        }
        .discover {
            display: flex;
            max-width: 468px;
            justify-content: space-between;
            padding: 5px;
            background: #ffffff;
            border-radius: 34px;
            border: 1px solid rgba(45, 118, 249, 0.24);
            margin-top: 32px;
            .input {
                border-radius: inherit;
                flex: 2;
                input {
                    border-radius: inherit;
                    outline: none;
                    border: none;
                    width: 100%;
                    height: 100%;
                    text-indent: 20px;
                }
                input::-webkit-input-placeholder {
                    color: #bab8bd;
                    font-size: 16px;
                }
            }
            .discover-btn {
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: white;
                width: 120px;
                padding: 5px 10px;
                padding-left: 20px;
                background: linear-gradient(
                    153.09deg,
                    #5390ff 10.28%,
                    #1660e6 102.17%
                );
                box-shadow: 0px 4px 12px rgba(56, 126, 250, 0.2);
                border-radius: 27px;
                span {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    background-color: #fff;
                    border-radius: 50%;
                }
            }
        }
    }
    .image {
        display: flex;
        flex: 1;
        justify-content: end;
        align-items: center;
    }
`;

const Hero = () => {
    return (
        <HeroStyles>
            <div className="content">
                <h1>
                    We Provide Delivery Within <br />
                    30 Min
                </h1>
                <p>
                    Imagine you don't need a diet because we provide <br />
                    healthy and delicious food for you!
                </p>
                <div className="discover">
                    <div className="input">
                        <input placeholder="Enter Zip Coad" />
                    </div>
                    <div className="discover-btn">
                        Discover
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
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={bannerImage} alt="banner" />
            </div>
        </HeroStyles>
    );
};

export default Hero;
