import React from "react";
import styled from "styled-components";

const CardBlogStyles = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    cursor: pointer;
    h3 {
        font-weight: 600;
        font-size: 24px;
        line-height: 34px;
        color: #2e2c49;
        padding: 24px 0;
    }
    .desc {
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 0.005em;
        color: #aaa7b1;
    }
    .read-more {
        display: flex;
        gap: 12px;
        margin-top: 36px;
        font-weight: 500;
        font-size: 16px;
        line-height: 16px;
        letter-spacing: 0.005em;
        color: #4d4c66;
    }
    @media screen and (max-width: 620px) {
        width: 100%;
    }
`;

const CardBlog = ({ item }) => {
    return (
        <CardBlogStyles>
            <img src={item.url} alt="food" />
            <h3>{item.title}</h3>
            <p className="desc">{item.desc}</p>
            <div className="read-more">
                <p>Read more</p>
                <span>{item.icon}</span>
            </div>
        </CardBlogStyles>
    );
};

export default CardBlog;
