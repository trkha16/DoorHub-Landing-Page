import React from "react";
import styled from "styled-components";
import bannerImage from "../assets/hero.png";
import ButtonLoadMore from "../components/button/ButtonLoadMore";

const HeroStyles = styled.div`
    display: flex;

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
                padding: 0 10px;
                input {
                    border-radius: inherit;
                    outline: none;
                    border: none;
                    width: 100%;
                    height: 100%;
                }
                input::-webkit-input-placeholder {
                    color: #bab8bd;
                    font-size: 16px;
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
        <HeroStyles className="container">
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
                    <ButtonLoadMore width="160px">Discover</ButtonLoadMore>
                </div>
            </div>
            <div className="image">
                <img src={bannerImage} alt="banner" />
            </div>
        </HeroStyles>
    );
};

export default Hero;
