import { FaFacebook,  FaTwitter, FaReddit, FaImages, FaPhone, FaInfoCircle, FaHome } from 'react-icons/fa'
import React from 'react'
import { Home, Gallery, Error, About, Contact } from '../Pages'


export const links = [
    {
        id: 1,
        url: '/',
        text: 'Home',
        page: <Home />,
        icon: <FaHome />
    },
    {
        id: 2,
        url: '/about',
        text: 'About',
        page: <About />,
        icon: <FaInfoCircle />
    },
    {
        id: 3,
        url: '/gallery',
        text: 'Gallery',
        page: <Gallery />,
        icon: <FaImages />
    },
    {
        id: 4,
        url: '/contact',
        text: 'Contact',
        page: <Contact />,
        icon: <FaPhone />
    },
    {
        id: 5,
        url: '*',
        text: 'Error',
        page: <Error />,
    },
];

export const boxLinks = [
    {
        id: 1,
        url: '/about',
        text: 'ABOUT',
        page: <About />,
        icon: <FaInfoCircle />
    },
    {
        id: 2,
        url: '/gallery',
        text: 'GALLERY',
        page: <Gallery />,
        icon: <FaImages />
    },
    {
        id: 3,
        url: '/contact',
        text: 'CONTACT',
        page: <Contact />,
        icon: <FaPhone />
    }
];

export const pictures = [
    {
        id: 1,
        img: "url(https://picsum.photos/4000)"
    },
    {
        id: 2,
        img: "url(https://picsum.photos/4000)"
    },
    {
        id: 3,
        img: "url(https://picsum.photos/4000)"
    },
    {
        id: 4,
        img: "url(https://picsum.photos/4000)"
    },
    {
        id: 5,
        img: "url(https://picsum.photos/4000)"
    },
    {
        id: 6,
        img: "url(https://picsum.photos/4000)"
    },
    {
        id: 7,
        img: "url(https://picsum.photos/4000)"
    },
    {
        id: 8,
        img: "url(https://picsum.photos/4000)"
    },
    {
        id: 9,
        img: "url(https://picsum.photos/4000)"
    },
    {
        id: 10,
        img: "url(https://picsum.photos/4000)"
    },
    {
        id: 11,
        img: "url(https://picsum.photos/4000)"
    },
    {
        id: 12,
        img: "url(https://picsum.photos/4000)"
    },
];

export const socials = [
    {
        id: 1,
        url: 'https://www.facebook.com',
        icon: <FaFacebook />
    },
    {
        id: 2,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />
    },
    {
        id: 3,
        url: 'https://www.reddit.com',
        icon: <FaReddit />
    }
]