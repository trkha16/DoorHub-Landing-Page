import React from "react";
import styled from "styled-components";
import ButtonLoadMore from "../components/button/ButtonLoadMore";
import CardBlog from "../components/card/CardBlog";
import SubTitle from "../components/subtitle/SubTitle";
import Title from "../components/title/Title";
import { blogItems } from "../constants";

const BlogStyles = styled.div`
    display: flex;
    padding: 64px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .blog {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 40px;
        margin-bottom: 60px;
    }
`;

const Blog = () => {
    return (
        <BlogStyles>
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
