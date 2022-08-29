import React from "react";
import styled from "styled-components";
import CardPopular from "../components/card/CardPopular";
import SubTitle from "../components/subtitle/SubTitle";
import Title from "../components/title/Title";
import { popularItems } from "../constants";

const PopularStyles = styled.div`
    display: flex;
    padding: 64px 0;
    justify-content: center;
    flex-direction: column;
    .card-container {
        margin-top: 8px;
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 80px 60px;
    }
`;

const Popular = () => {
    return (
        <PopularStyles>
            <Title>Popular dishes with delivery</Title>
            <SubTitle>
                The most delicious and healthy dishes from our chefs. You can
                order <br /> this meal separately or as part of a meal plan.
            </SubTitle>
            <div className="card-container">
                {popularItems.map((card) => (
                    <CardPopular
                        url={card.url}
                        title={card.title}
                        price={card.price}
                    ></CardPopular>
                ))}
            </div>
        </PopularStyles>
    );
};

export default Popular;
