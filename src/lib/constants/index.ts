import { siteConfig } from "../site-config";
import { T_NavLink, T_Partner, T_Statistic } from "../types";


const partners: T_Partner[] = [
    {
        name: "Play Hand Ball",
        logoUrl: "/play-handball-logo.png",
        externalLink: "https://playhandball.com",
        logoSize: 100,
    },
    {
        name: "Ministry of Youth Affairs, Creative Economy and Sports",
        logoUrl: "/youth affairs-LOGO.jpg",
        externalLink: "https://playhandball.com",
        logoSize: 600,
    },
    {
        name: "Strathmore University",
        logoUrl: "/strathmore logo.png",
        externalLink: "https://playhandball.com",
        logoSize: 400,
    },
    {
        name: "Daystar University",
        logoUrl: "/daystar logo.png",
        externalLink: "https://playhandball.com",
        logoSize: 200,
    },
    {
        name: "Masinde Muliro University of Science and Technology",
        logoUrl: "/masinde-muliro logo.jpg",
        externalLink: "https://playhandball.com",
        logoSize: 500,
    },
    {
        name: "Kenyatta University",
        logoUrl: "/ku logo.png",
        externalLink: "https://playhandball.com",
        logoSize: 400,
    },
    {
        name: "Moi Forces Academy Nairobi",
        logoUrl: "/Moi-Forces-Academy-Nairobi.jpg",
        externalLink: "https://playhandball.com",
        logoSize: 100,
    },
];


const navLinks: T_NavLink[] = [
    {
        name: "HOME",
        link: `${siteConfig.url}/home`,
    },
    {
        name: "WHO WE ARE",
        link: `${siteConfig.url}/about`,
    },
    {
        name: "OUR IMPACT",
        link: `${siteConfig.url}/impact`,
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


export {
    partners,
    navLinks,
    statistics,
    benefits,
}
