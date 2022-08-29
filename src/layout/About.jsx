import React from "react";
import styled from "styled-components";
import aboutImage from "../assets/about.png";
import Button from "../components/button/Button";
import SubTitle from "../components/subtitle/SubTitle";
import Title from "../components/title/Title";
import { aboutItems } from "../constants";

const AboutStyles = styled.div`
    display: flex;
    padding: 64px 0;
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
`;

const About = () => {
    return (
        <AboutStyles>
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