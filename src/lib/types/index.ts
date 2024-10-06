type T_Partner = {
    name: string,
    logoSize: number,
    logoUrl: string,
    externalLink: string,
}

type T_NavLink = {
    name: string,
    link: string,
}

type T_Statistic = {
    name: string,
    value: number,
}

type T_Social = {
    text: string,
    logoUrl: string,
}

export type {
    T_Partner,
    T_NavLink,
    T_Statistic,
    T_Social,
}
