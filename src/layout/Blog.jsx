import React from "react";
import styled from "styled-components";
import ButtonLoadMore from "../components/button/ButtonLoadMore";
import CardBlog from "../components/card/CardBlog";
import SubTitle from "../components/subtitle/SubTitle";
import Title from "../components/title/Title";
import { blogItems } from "../constants";

const BlogStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 90px;
    .blog {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 40px;
        margin-bottom: 60px;
    }

    @media screen and (max-width: 620px) {
        padding: 32px 10px;
    }
    @media screen and (max-width: 1060px) {
        margin-bottom: 0;

        .blog {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 32px;
        }
    }
`;

const Blog = () => {
    return (
        <BlogStyles className="container">
            <Title center="center">Articles and useful tips</Title>
            <SubTitle center="center">
                Read on for useful information about tasty and healthy food.
                Interesting events and recipes. <br /> New meal plans and
                specialized diets for weight loss or gain
            </SubTitle>
            <div className="blog">
                {blogItems.map((item) => (
                    <CardBlog key={item.id} item={item}></CardBlog>
                ))}
            </div>
            <ButtonLoadMore width="130px">See all</ButtonLoadMore>
        </BlogStyles>
    );
};

export default Blog;
