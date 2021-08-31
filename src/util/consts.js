import { FaFacebook,  FaTwitter, FaReddit } from 'react-icons/fa'
import React from 'react'
import { Home, Gallery, Error, About, Contact } from '../Pages'


export const links = [
    {
        id: 1,
        url: '/',
        text: 'Home',
        page: <Home />
    },
    {
        id: 2,
        url: '/about',
        text: 'About',
        page: <About />
    },
    {
        id: 3,
        url: '/gallery',
        text: 'Gallery',
        page: <Gallery />
    },
    {
        id: 4,
        url: '/contact',
        text: 'Contact',
        page: <Contact />
    },
    {
        id: 5,
        url: '*',
        text: 'Error',
        page: <Error />,
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