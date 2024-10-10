import { siteConfig } from "../site-config";
import { T_NavLink, T_Partner, T_Social, T_Statistic } from "../types";


const partners: T_Partner[] = [
    {
        name: "Play Hand Ball",
        logoUrl: "/play-handball-logo.png",
        externalLink: "https://playhandball1.com",
        logoSize: 100,
    },
    {
        name: "Ministry of Youth Affairs, Creative Economy and Sports",
        logoUrl: "/youth affairs-LOGO.jpg",
        externalLink: "https://playhandball2.com",
        logoSize: 600,
    },
    {
        name: "Strathmore University",
        logoUrl: "/strathmore logo.png",
        externalLink: "https://playhandball3.com",
        logoSize: 300,
    },
    {
        name: "Daystar University",
        logoUrl: "/daystar logo.png",
        externalLink: "https://playhandball4.com",
        logoSize: 200,
    },
    {
        name: "Masinde Muliro University of Science and Technology",
        logoUrl: "/masinde-muliro logo.jpg",
        externalLink: "https://playhandball5.com",
        logoSize: 300,
    },
    {
        name: "Kenyatta University",
        logoUrl: "/ku logo.png",
        externalLink: "https://playhandball6.com",
        logoSize: 300,
    },
    {
        name: "Moi Forces Academy Nairobi",
        logoUrl: "/Moi-Forces-Academy-Nairobi.jpg",
        externalLink: "https://playhandball7.com",
        logoSize: 70,
    },
];


const navLinks: T_NavLink[] = [
    {
        name: "Home",
        link: `/`,
    },
    {
        name: "About us",
        link: `${siteConfig.url}/about`,
    },
    {
        name: "Gallery",
        link: `${siteConfig.url}/gallery`,
    },
];


const statistics: T_Statistic[] = [
    {
        name: "UPLIFTED",
        value: 250,
    },
    {
        name: "ALLIANCES",
        value: 10,
    },
    {
        name: "GRANTS",
        value: 10,
    },
    {
        name: "ENGADED",
        value: 290,
    },
];


const benefits: string[] = [
    "Test themselves in peaceful competition against opponents",
    "Dealing with victory and defeat",
    "Accepting rules",
    "Pushing past their limits and gain resilience",
    "Fostering teamwork, collaboration and good sportsmanship",
    "Acquire academic scholarship opportunities",
]


const socials: T_Social[] = [
    {
        text: "info@kidsbeyondlimit.co.ke",
        logoUrl: "/social-icons/instagram.png",
    },
    {
        text: "+254712345678",
        logoUrl: "/social-icons/instagram.png",
    },
    {
        text: "Facebook",
        logoUrl: "/social-icons/instagram.png",
    },
    {
        text: "Instagram",
        logoUrl: "/social-icons/instagram.png",
    },
]


export {
    partners,
    navLinks,
    statistics,
    benefits,
    socials,
}
