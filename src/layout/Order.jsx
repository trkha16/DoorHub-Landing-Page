import React from "react";
import styled from "styled-components";
import SubTitle from "../components/subtitle/SubTitle";
import Title from "../components/title/Title";

import order01 from "../assets/order01.png";
import order02 from "../assets/order02.png";
import order03 from "../assets/order03.png";
import order04 from "../assets/order04.png";

const OrderStyles = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    .steps {
        display: grid;
        grid-template-columns: auto auto auto auto;
        gap: 80px 60px;
        .step-items {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @media screen and (max-width: 1060px) {
        .steps {
            grid-template-columns: auto auto;
        }
    }
    @media screen and (max-width: 620px) {
        .steps {
            grid-template-columns: auto;
            gap: 50px 0;
        }
    }
`;

const Order = () => {
    return (
        <OrderStyles className="container">
            <Title center="center">How To Order?</Title>
            <SubTitle center="center">Follow the Steps</SubTitle>
            <div className="steps">
                {orderItems.map((item) => (
                    <div className="step-items">
                        <img src={item.url} alt={item.url} />
                    </div>
                ))}
            </div>
        </OrderStyles>
    );
};

export default Order;

const orderItems = [
    {
        url: order01,
    },
    {
        url: order02,
    },
    {
        url: order03,
    },
    {
        url: order04,
    },
];
