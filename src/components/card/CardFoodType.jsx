import React from "react";
import styled from "styled-components";

const CardFoodTypeStyles = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(
        180deg,
        #eaf0ff 0%,
        rgba(234, 240, 255, 0) 100%
    );
    border-radius: 28px;
    padding: 32px 30px;
    &:hover {
        background: linear-gradient(138.79deg, #b0cfff 8.47%, #82b2fe 81.99%);
    }
    .food {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 110px;
        height: 110px;
        background-color: white;
        border-radius: 50%;
        margin-bottom: 18px;
        img {
            width: 90px;
            height: 90px;
            object-fit: contain;
            border-radius: inherit;
            text-align: center;
        }
    }
    p {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        text-align: center;
        color: #4d4c66;
        text-transform: uppercase;
    }
`;

const CardFoodType = ({ url, alt, children }) => {
    return (
        <CardFoodTypeStyles>
            <div className="food">
                <img src={url} alt={alt} />
            </div>
            <p>{children}</p>
        </CardFoodTypeStyles>
    );
};

export default CardFoodType;
