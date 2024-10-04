import { siteConfig } from "../site-config";
import { T_NavLink, T_Partner, T_Statistic } from "../types";


const partners: T_Partner[] = [
    {
        name: "Play Hand Ball",
        logoUrl: "/partner.png",
        externalLink: "https://playhandball.com",
    },
    {
        name: "Play Hand Ball",
        logoUrl: "/partner.png",
        externalLink: "https://playhandball.com",
    },
    {
        name: "Play Hand Ball",
        logoUrl: "/partner.png",
        externalLink: "https://playhandball.com",
    },
    {
        name: "Play Hand Ball",
        logoUrl: "/partner.png",
        externalLink: "https://playhandball.com",
    },
    {
        name: "Play Hand Ball",
        logoUrl: "/partner.png",
        externalLink: "https://playhandball.com",
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


export {
    partners,
    navLinks,
    statistics,
}
