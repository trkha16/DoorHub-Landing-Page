import React from "react";
import styled from "styled-components";
import SubTitle from "../components/subtitle/SubTitle";
import Title from "../components/title/Title";

const OrderStyles = styled.div`
    display: flex;
    padding: 64px 0;
    justify-content: center;
    flex-direction: column;
`;

const Order = () => {
    return (
        <OrderStyles>
            <Title center="center">How To Order?</Title>
            <SubTitle center="center">Follow the Steps</SubTitle>
        </OrderStyles>
    );
};

export default Order;
