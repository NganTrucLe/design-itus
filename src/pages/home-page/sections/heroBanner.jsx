import { makeStyles } from "@material-ui/core"

import Slideshow from "../components/slideShow"

import { neutralColors, section } from "../../../assets/globalStyle"
import Wave from "../components/wave"
import Card from "../components/card"

const whiteText = {
    color: neutralColors[0]
}

const useStyles = makeStyles((theme) => ({
    root: {
        ...section, 
        display: "flex", 
        justifyContent: "space-between", 
        flexDirection: "column", 
        gap: "0 !important", 
        [theme.breakpoints.up("md")]: {
            flexDirection: "row"
        },
    }, 
    text: {
        gap: "0 !important",
        textAlignLast: "center",
        [theme.breakpoints.up("md")]: {
            ...whiteText,
            position: "relative",
            marginTop: "-270px",
            marginBottom: "170px",
            textAlignLast: "left", 
            paddingRight: "20px !important"
        },
        [theme.breakpoints.up("lg")]: {
            paddingRight: "0 !important"
        },
    },
    title: {
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "30px",
        [theme.breakpoints.up("md")]: {
            fontSize: "25px",
            lineHeight: "37.5px",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "31.25px",
            lineHeight: "46.875px",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: "48px",
            lineHeight: "80px",
        },
    },
    subTitle: {
        maxWidth: "666px",
    },
    cards: {
        display: "flex", 
        justifyContent: "center", 
        marginTop: "30px", 
        [theme.breakpoints.up("md")]: {
            ...whiteText,
            position: "relative",
            marginTop: "-270px",
            marginBottom: "170px",
        },
    }, 
    cardFirst: {
        zIndex: 2, 
    }, 
    cardMiddle: {
        marginTop: '50px',
        marginLeft: '-40px',
    },
    cardLast: {
        marginTop: '-15px',
        marginLeft: '-30px'
    },
}))

export default function HeroBanner() {
    const classes = useStyles()

    return (
        <>
            <Slideshow />
            <div className={classes.root}>
                <div className={classes.text}>
                    <div className={classes.title}>
                        Creativity Is A Drug.
                    </div>
                    <div className={classes.subTitle}>
                        Nơi dành cho các bạn trẻ với những khả năng thiết kế, nhiếp ảnh, video, vẽ tranh,... được sống với niềm đam mê, sở thích của chính mình.
                    </div>
                </div>
                <div className={classes.cards}>
                    <Card num="100+" description="thành viên" className={classes.cardFirst}/>
                    <Card num="6" description="mùa Outr Space" className={classes.cardMiddle} />
                    <Card num="27k+" description="người theo dõi" className={classes.cardLast}/>
                </div>
            </div>
            <Wave />
        </>
    )
}