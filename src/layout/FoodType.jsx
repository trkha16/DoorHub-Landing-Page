import React from "react";
import styled from "styled-components";
import SubTitle from "../components/subtitle/SubTitle";
import Title from "../components/title/Title";

const FoodTypeStyles = styled.div`
    display: flex;
    padding: 64px 0;
    justify-content: center;
    flex-direction: column;
`;

const FoodType = () => {
    return (
        <FoodTypeStyles>
            <Title>
                More Than 20,000 Dishes <br /> To Order!
            </Title>
            <SubTitle>
                Welcome to The Biggest Network of Food Ordering & Delivery
            </SubTitle>
        </FoodTypeStyles>
    );
};

export default FoodType;
