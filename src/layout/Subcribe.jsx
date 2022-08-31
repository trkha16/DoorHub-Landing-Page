import React from "react";
import styled from "styled-components";
import Button from "../components/button/Button";
import ButtonLoadMore from "../components/button/ButtonLoadMore";
import SubTitle from "../components/subtitle/SubTitle";
import Title from "../components/title/Title";

const SubcribeStyles = styled.div`
    background: #6b95d8;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    .subcribe-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 125px 0;
    }
    .ready-container {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        .ready {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    }
    .discover {
        display: flex;
        max-width: 468px;
        justify-content: space-between;
        padding: 5px;
        background: #ffffff;
        border-radius: 34px;
        border: 1px solid rgba(45, 118, 249, 0.24);
        margin-top: 32px;
        .input {
            border-radius: inherit;
            flex: 2;
            padding: 0 10px;
            input {
                border-radius: inherit;
                outline: none;
                border: none;
                width: 100%;
                height: 100%;
            }
            input::-webkit-input-placeholder {
                color: #bab8bd;
                font-size: 16px;
            }
        }
    }

    .line {
        height: inherit;
        border: 2px dashed #99bcf4;
        position: absolute;
    }
`;

const Subcribe = () => {
    return (
        <SubcribeStyles>
            <div className="subcribe-container">
                <div className="subcribe">
                    <Title color="white">
                        Subscribe our <br /> newsletter
                    </Title>
                    <SubTitle color="#DDE6F3">
                        Browse local restaurants and businesses for delivery by
                        <br />
                        entering your address blow.
                    </SubTitle>
                    <div className="discover">
                        <div className="input">
                            <input placeholder="Enter your email address..." />
                        </div>
                        <ButtonLoadMore width="160px">Discover</ButtonLoadMore>
                    </div>
                </div>
            </div>

            <div className="ready-container">
                <div className="ready">
                    <Title color="white">
                        Ready to <br /> order?
                    </Title>
                    <Button styles={{ border: "none" }}>Order Now</Button>
                </div>
            </div>

            <div className="line"></div>
        </SubcribeStyles>
    );
};

export default Subcribe;
