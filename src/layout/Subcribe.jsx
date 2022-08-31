import React from "react";
import styled from "styled-components";
import Button from "../components/button/Button";
import ButtonLoadMore from "../components/button/ButtonLoadMore";
import SubTitle from "../components/subtitle/SubTitle";
import Title from "../components/title/Title";

const SubcribeStyles = styled.div`
    background: #6b95d8;
    display: flex;
    height: 100%;
    position: relative;
    .subcribe-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 125px 15px;
        border-right: 2px dashed #99bcf4;
        .subcribe {
            .ready {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
        }
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

    @media screen and (max-width: 620px) {
        flex-direction: column;
        .ready-container {
            padding-bottom: 50px;
            width: 100%;
            .ready {
                width: 100%;
                padding: 0 10px;
            }
            .ready-btn {
                width: 200px;
            }
        }
        .subcribe-container {
            padding: 50px 10px;
            border: none;
            .subcribe {
                width: 100%;
            }
        }
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
                    <Button className="ready-btn">Order Now</Button>
                </div>
            </div>
        </SubcribeStyles>
    );
};

export default Subcribe;
