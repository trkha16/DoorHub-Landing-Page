import SUSHI from "../assets/SUSHI.png";
import PIZZA from "../assets/PIZZA.png";
import BURGER from "../assets/BURGER.png";
import DESSERTS from "../assets/DESSERTS.png";
import SALAD from "../assets/SALAD.png";
import PASTA from "../assets/PASTA.png";

import popular01 from "../assets/popular01.png";
import popular02 from "../assets/popular02.png";
import popular03 from "../assets/popular03.png";
import popular04 from "../assets/popular04.png";
import popular05 from "../assets/popular05.png";
import popular06 from "../assets/popular06.png";

import blog01 from "../assets/blog01.png";
import blog02 from "../assets/blog02.png";
import blog03 from "../assets/blog03.png";

export const cardItems = [
    {
        id: 1,
        url: SUSHI,
        alt: "sushi",
        title: "sushi",
    },
    {
        id: 2,
        url: PIZZA,
        alt: "pizza",
        title: "pizza",
    },
    {
        id: 3,
        url: BURGER,
        alt: "burger",
        title: "burgers",
    },
    {
        id: 4,
        url: DESSERTS,
        alt: "desserts",
        title: "desserts",
    },
    {
        id: 5,
        url: SALAD,
        alt: "salad",
        title: "salad",
    },
    {
        id: 6,
        url: PASTA,
        alt: "pasta",
        title: "pasta",
    },
];

export const popularItems = [
    {
        id: 1,
        url: popular01,
        title: "Stewed cabbage with sauce",
        price: "5.90",
    },
    {
        id: 2,
        url: popular02,
        title: "Puree soup with turkey pieces",
        price: "7.55",
    },
    {
        id: 3,
        url: popular03,
        title: "Chicken with vegetables",
        price: "3.39",
    },
    {
        id: 4,
        url: popular04,
        title: "Traditional Greek salad",
        price: "4.99",
    },
    {
        id: 5,
        url: popular05,
        title: "Three-Meat Special Lasagna",
        price: "5.10",
    },
    {
        id: 6,
        url: popular06,
        title: "Veggie Tagliatelle Bolognese",
        price: "4.80",
    },
];

export const aboutItems = [
    {
        id: 1,
        icon: (
            <svg
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 5.95915H14M14 5.95915L9.5 10.4591M14 5.95915L9.5 1.45898"
                    stroke="#2E2C49"
                    stroke-width="1.5"
                />
            </svg>
        ),
        content: "Order a nutritionist consultation",
    },
    {
        id: 2,
        icon: (
            <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.1821 11.5405L11.0816 1.641M11.0816 1.641V8.00496M11.0816 1.641L4.71751 1.64089"
                    stroke="#2E2C49"
                    stroke-width="1.5"
                />
            </svg>
        ),
        content: "Order healthy food express delivery",
    },
    {
        id: 3,
        icon: (
            <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.1821 11.5405L11.0816 1.641M11.0816 1.641V8.00496M11.0816 1.641L4.71751 1.64089"
                    stroke="#2E2C49"
                    stroke-width="1.5"
                />
            </svg>
        ),
        content: "Tariff plans on an ongoing basis",
    },
    {
        id: 4,
        icon: (
            <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.1821 11.5405L11.0816 1.641M11.0816 1.641V8.00496M11.0816 1.641L4.71751 1.64089"
                    stroke="#2E2C49"
                    stroke-width="1.5"
                />
            </svg>
        ),
        content: "Offers for special clients",
    },
];

export const blogItems = [
    {
        id: 1,
        url: blog01,
        title: "New seafood recipe perfect for losing weight",
        desc: "Mass communication has led to modern marketing strategies to continue focusing on brand awareness.",
        icon: (
            <svg
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 5.77702H14M14 5.77702L9.5 10.277M14 5.77702L9.5 1.27686"
                    stroke="#393E61"
                    stroke-width="1.5"
                />
            </svg>
        ),
    },
    {
        id: 2,
        url: blog02,
        title: "Balance of proteins, fats and carbo. How do I get it?",
        desc: "Mass communication has led to modern marketing strategies to continue focusing on brand awareness.",
        icon: (
            <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.05026 10.727L10.9498 0.827523M10.9498 0.827523V7.19149M10.9498 0.827523L4.58568 0.827409"
                    stroke="#393E61"
                    stroke-width="1.5"
                />
            </svg>
        ),
    },
    {
        id: 3,
        url: blog03,
        title: "The importance of proper and healthy eating.",
        desc: "Large distributions and heavy promotions. The fast-paced environment of digital payment service.",
        icon: (
            <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.05026 10.727L10.9498 0.827523M10.9498 0.827523V7.19149M10.9498 0.827523L4.58568 0.827409"
                    stroke="#393E61"
                    stroke-width="1.5"
                />
            </svg>
        ),
    },
];

export const footerItems = [
    {
        id: 1,
        title: "Quick Link",
        links: [
            {
                name: "About Us",
            },
            {
                name: "Become A Partner",
            },
            {
                name: "Our Team",
            },
            {
                name: "Blog",
            },
            {
                name: "Contact",
            },
        ],
    },
    {
        id: 2,
        title: "Useful Link",
        links: [
            {
                name: "Privacy Policy",
            },
            {
                name: "Terms and Conditions",
            },
            {
                name: "Disclaimer",
            },
            {
                name: "Support",
            },
            {
                name: "FAQ",
            },
        ],
    },
    {
        id: 3,
        title: "Get to Know Us",
        links: [
            {
                name: "Gift Cards",
            },
            {
                name: "DoorDash Stories",
            },
            {
                name: "LinkedIn",
            },
            {
                name: "Glassdoor",
            },
            {
                name: "Accessibility",
            },
        ],
    },
    {
        id: 4,
        title: "Contact",
        links: [
            {
                name: "WhatsApp",
            },
            {
                name: "Support 24",
            },
        ],
    },
];
