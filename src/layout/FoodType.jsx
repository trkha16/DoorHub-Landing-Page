import React from "react";
import styled from "styled-components";
import ButtonSwitch from "../components/button/ButtonSwitch";
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
            <ButtonSwitch></ButtonSwitch>
        </FoodTypeStyles>
    );
};

export default FoodType;
