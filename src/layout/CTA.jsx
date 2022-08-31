import React from "react";
import styled from "styled-components";
import Title from "../components/title/Title";
import SubTitle from "../components/subtitle/SubTitle";

import CTAImage from "../assets/CTA.png";
import GGPlay from "../assets/GGPlay.png";
import AppStore from "../assets/AppStore.png";

const CTAStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
        flex: 1;
        .btn-container {
            display: flex;
            gap: 24px;
        }
    }
    .image {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .desc-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        margin-bottom: 40px;
        .desc {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            font-weight: 500;
            font-size: 20px;
            line-height: 20px;
            letter-spacing: 0.005em;
            .number {
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 20px;
                width: 34px;
                height: 34px;
                border: 1.5px dashed #feac00;
            }
        }
    }

    @media screen and (max-width: 1060px) {
        flex-direction: column-reverse;
        gap: 32px;
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

const CTA = () => {
    return (
        <CTAStyles className="container">
            <div className="content">
                <Title>Make The Delicious Food and Order Our App</Title>
                <SubTitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do <br /> eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                    <br /> Ut enim ad minim veniam.
                </SubTitle>
                <div className="desc-container">
                    {CTADescription.map((item) => (
                        <div key={item.id} className="desc">
                            <div className="number">{item.number}</div>
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>
                <div className="btn-container">
                    <img src={AppStore} alt="App Store" />
                    <img src={GGPlay} alt="Google Play" />
                </div>
            </div>
            <div className="image">
                <img src={CTAImage} alt="CTA" />
            </div>
        </CTAStyles>
    );
};

export default CTA;

const CTADescription = [
    {
        id: 1,
        number: "01",
        title: "Follow Delivery Status",
    },
    {
        id: 2,
        number: "02",
        title: "Order From Any Location",
    },
];
