import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const HeaderStyles = styled.div`
    padding: 24px 8%;
    ul {
        list-style: none;
        li {
            line-height: 16px;
            font-weight: 500;
            font-style: normal;
            color: #aaa7b1;
            &:hover {
                color: #2e2c49;
                cursor: pointer;
            }
        }
    }
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 40px;
            list-style: none;
            li {
                line-height: 16px;
                font-weight: 500;
                font-style: normal;
                color: #aaa7b1;
                &:hover {
                    color: #2e2c49;
                    cursor: pointer;
                }
            }
        }
        .button {
            background: linear-gradient(
                153.09deg,
                #5390ff 10.28%,
                #1660e6 102.17%
            );
            box-shadow: 0px 16px 40px -8px rgba(56, 126, 250, 0.28);
            border-radius: 40px;
            padding: 14px 36px;
            font-weight: 6000;
            line-height: 16px;
            text-align: center;
            color: white;
            cursor: pointer;
        }
    }

    .navbar-hide {
        display: none;
    }

    @media screen and (max-width: 1060px) {
        .navbar {
            display: none;
        }
        .navbar-hide {
            display: flex;
            justify-content: space-between;
            .menu-container {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                position: absolute;
                right: 1%;
                background: black;
                border-radius: 7px;
                li {
                    padding: 16px 0;
                }
                .button {
                    padding: 14px 36px;
                    line-height: 16px;
                    font-weight: 500;
                    font-style: normal;
                    color: #aaa7b1;
                }
            }
        }
    }
`;

const Header = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <HeaderStyles>
            <div className="navbar">
                <img src={logo} alt="Logo" className="logo" />
                <ul>
                    {navLinks.map((nav) => (
                        <li key={nav.id}>{nav.title}</li>
                    ))}
                </ul>
                <div className="button">Contact Us</div>
            </div>

            <div className="navbar-hide">
                <img src={logo} alt="Logo" className="logo" />

                <div>
                    <div onClick={() => setToggle((prev) => !prev)}>
                        {toggle ? <CloseIcon /> : <MenuIcon />}
                    </div>
                    {toggle ? (
                        <div className="menu-container">
                            <ul>
                                {navLinks.map((nav) => (
                                    <li key={nav.id}>{nav.title}</li>
                                ))}
                            </ul>
                            <div className="button">Contact Us</div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </HeaderStyles>
    );
};

export default Header;

const navLinks = [
    {
        id: 1,
        title: "Home",
    },
    {
        id: 2,
        title: "About Us",
    },
    {
        id: 3,
        title: "Features",
    },
    {
        id: 4,
        title: "Contact",
    },
    {
        id: 5,
        title: "Blog",
    },
];
