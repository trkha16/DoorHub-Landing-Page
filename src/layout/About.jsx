import React from "react";
import styled from "styled-components";
import aboutImage from "../assets/about.png";
import Button from "../components/button/Button";
import SubTitle from "../components/subtitle/SubTitle";
import Title from "../components/title/Title";
import { aboutItems } from "../constants";

const AboutStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .image {
        flex: 1;
    }
    .content-container {
        flex: 1;
        display: flex;
        justify-content: end;
        .content {
            display: flex;
            flex-direction: column;
            .btn-container {
                display: flex;
                gap: 24px;
            }
        }
    }
    .desc-container {
        display: grid;
        grid-template-columns: auto auto;
        gap: 45px 32px;
        width: 480px;
        margin-bottom: 42px;
        .desc-item {
            display: flex;
            gap: 16px;
            align-items: center;
            width: 100%;
            font-weight: 500;
            font-size: 18px;
            line-height: 28px;
            color: #4d4c66;
        }
    }

    @media screen and (max-width: 1060px) {
        flex-direction: column;
        gap: 32px;
        br {
            display: none;
        }
        .content-container {
            justify-content: center;
            align-items: center;
            width: 100%;
            .content {
                display: inline-block;
            }
        }
    }
    @media screen and (max-width: 620px) {
        .image {
            display: none;
        }
        .content {
            width: 100%;
        }
        .desc-container {
            display: grid;
            grid-template-columns: auto;
            width: 100%;
            margin-bottom: 32px;
        }
    }
`;

const About = () => {
    return (
        <AboutStyles className="container">
            <div className="image">
                <img src={aboutImage} alt="chef" />
            </div>
            <div className="content-container">
                <div className="content">
                    <Title>
                        Delicious and healthy <br /> food for your body
                    </Title>
                    <SubTitle lineHeight="26px">
                        Our company is engaged in the delivery of healthy and
                        tasty
                        <br />
                        food around the city. Special cooking and delivery
                        technologies <br /> allow you to buy fresh and healthy
                        food.
                    </SubTitle>
                    <div className="desc-container">
                        {aboutItems.map((item) => (
                            <div key={item.id} className="desc-item">
                                <span>{item.icon}</span>
                                <p>{item.content}</p>
                            </div>
                        ))}
                    </div>
                    <div className="btn-container">
                        <Button>choose a diet</Button>
                        <Button>what's new?</Button>
                    </div>
                </div>
            </div>
        </AboutStyles>
    );
};

export default About;
