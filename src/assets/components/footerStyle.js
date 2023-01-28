import { defaultFont, neutralColors, primaryColors, section } from "../globalStyle";

const displayFlex = {
    display: "flex",
}

const column = {
    ...displayFlex,
    flexDirection: "column"
}

const rowGap40 = {
    ...displayFlex,
    gap: "40px"
}

const fillContainer = {
    width: "100%"
}

const footerStyle = theme => ({
    root: {
        ...defaultFont,
        ...section,
        gap: "36px !important",
        background: primaryColors[3],
        color: neutralColors[5],
        paddingTop: "36px",
        paddingBottom: "36px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "13px",
            gap: "12px",
            paddingTop: "20px",
            paddingBottom: "20px",
        },
    },
    divider: {
        height: 0,
        border: "1px solid " + neutralColors[5],
    },
    displayFlex: {
        ...displayFlex,
    },
    container: {
        ...displayFlex,
        justifyContent: "space-between",
        [theme.breakpoints.down("sm")]: {
            ...fillContainer
        },
    },
    socials: {
        marginLeft: "20px"
    },
    logo: {
        height: "80px",
        [theme.breakpoints.down("sm")]: {
            height: "32px"
        },
    },
    title: {
        fontWeight: 600,
        color: neutralColors[9]
    },
    columnGap4: {
        ...column,
        gap: "4px",
        [theme.breakpoints.down("sm")]: {
            gap: 0
        },
    },
    rowGap8: {
        ...displayFlex,
        gap: "8px"
    },
    columnGap8: {
        ...column,
        gap: "8px",
    },
    columnGap18: {
        ...column,
        gap: "18px",
        [theme.breakpoints.down("sm")]: {
            ...fillContainer,
            gap: "12px"
        },
    },
    columnGap12: {
        ...column,
        gap: "12px",
        [theme.breakpoints.down("sm")]: {
            gap: "8px"
        },
    },
    rowGap40: {
        ...rowGap40
    },
    rowCenter: {
        ...rowGap40,
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            gap: "12px",
            ...fillContainer
        },
    },
    rowGap12: {
        ...displayFlex,
        gap: "12px",
        [theme.breakpoints.down("sm")]: {
            gap: "4px"
        },
    },
    link: {
        color: neutralColors[5],
        fontWeight: 400, 
    }
});

export default footerStyle; 