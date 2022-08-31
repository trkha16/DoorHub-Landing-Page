import React from "react";
import styled from "styled-components";

import Logo from "../assets/logo.png";
import SubTitle from "../components/subtitle/SubTitle";
import { footerItems } from "../constants";

const FooterStyles = styled.div`
    display: flex;
    padding-top: 142px;
    padding-bottom: 0;
    flex-direction: column;
    .main {
        display: flex;
        padding-bottom: 50px;
        .company {
            flex: 1;
        }
    }
    .menu {
        flex: 1.5;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        h4 {
            font-weight: 500;
            font-size: 18px;
            line-height: 16px;
            cursor: pointer;
            color: #4d4c66;
        }
        ul {
            list-style-type: none;
            margin-top: 24px;
            li {
                font-weight: 400;
                font-size: 14px;
                line-height: 34px;
                color: #aaa7b1;
                cursor: pointer;
            }
        }
    }

    .copyright {
        padding: 32px 0;
        border-top: 1px solid #aaa7b1;
        p {
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            color: #c6c5ca;
            text-align: center;
        }
    }
    @media screen and (max-width: 1060px) {
        padding-top: 50px;
        .main {
            flex-direction: column;
        }
        .menu {
            display: grid;
            grid-template-columns: auto auto;
            gap: 24px;
        }
    }
`;

const Footer = () => {
    return (
        <FooterStyles className="container">
            <div className="main">
                <div className="company">
                    <img src={Logo} alt="logo" />
                    <SubTitle>
                        Special cooking and delivery <br /> technologies allow
                        you to buy <br /> fresh and healthy food.
                    </SubTitle>
                </div>
                <div className="menu">
                    {footerItems.map((link) => (
                        <div key={link.id}>
                            <h4>{link.title}</h4>
                            <ul>
                                {link.links.map((item) => (
                                    <li key={item.name}>{item.name}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="copyright">
                <div>
                    <p>Copyright © Besnik 2021. All rights reserved.</p>
                </div>
            </div>
        </FooterStyles>
    );
};

export default Footer;
