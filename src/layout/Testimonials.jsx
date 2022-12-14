import React from "react";
import styled from "styled-components";

import ButtonSwitch from "../components/button/ButtonSwitch";
import SubTitle from "../components/subtitle/SubTitle";
import Title from "../components/title/Title";

import TestimonialsBanner from "../assets/TestimonialsBanner.png";
import rating from "../assets/rating.png";
import avatar from "../assets/avatar.png";

const TestimonialsStyles = styled.div`
    display: flex;
    .content-container {
        flex: 1;
    }
    .image {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .clients {
        display: flex;
        justify-content: space-between;
        width: 516px;
        .info {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            height: 86px;
            .avatar {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 86px;
                height: 86px;
                background: #82b2fe;
                border-radius: 50%;
                cursor: pointer;
            }
            .details {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
                h5 {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 20px;
                    letter-spacing: 0.005em;
                    color: #2e2c49;
                }
                p {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 16px;
                    letter-spacing: 0.005em;
                    color: #aaa7b1;
                }
                img {
                    width: 98px;
                    height: 18px;
                }
            }
        }
        .switch-btn {
            margin: auto 0;
        }
    }
    @media screen and (max-width: 1060px) {
        flex-direction: column;
        br {
            display: none;
        }
        .content-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            .content {
                display: inline-block;
            }
        }
        .clients {
            flex-direction: column;
            width: 100%;
            .switch-btn {
                margin: 0 auto;
                margin-top: 20px;
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
    }
`;

const Testimonials = () => {
    return (
        <TestimonialsStyles className="container">
            <div className="image">
                <img src={TestimonialsBanner} alt="banner" />
            </div>

            <div className="content-container">
                <div className="content">
                    <Title>
                        What Our clients say <br /> about us
                    </Title>
                    <SubTitle>
                        I am grateful to the company for the timely and
                        exceptionally <br /> accurate delivery of food.
                        Everything is very tasty and high <br /> quality. And it
                        follows that the weight loss plan I have chosen <br />{" "}
                        really works! I was surprised
                    </SubTitle>
                    <div className="clients">
                        <div className="info">
                            <div className="avatar">
                                <img src={avatar} alt="Client avatar" />
                            </div>

                            <div className="details">
                                <h5>Seona Palmsmith, </h5>
                                <p>Dixon Corp</p>
                                <img src={rating} alt="rating" />
                            </div>
                        </div>
                        <ButtonSwitch className="switch-btn"></ButtonSwitch>
                    </div>
                </div>
            </div>
        </TestimonialsStyles>
    );
};

export default Testimonials;
