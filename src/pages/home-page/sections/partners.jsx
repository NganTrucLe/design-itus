import { makeStyles } from "@material-ui/core"

import { headerStyle } from "../homePage"
import { defaultFont, section } from "../../../assets/globalStyle"

import CTF from "../assets/partners/CTF.svg"
import ThachThuc from "../assets/partners/ThachThuc.svg"
import SAB from "../assets/partners/SAB.svg"
import BlackPinker from "../assets/partners/BlackPinker.svg"
import BLIT from "../assets/partners/BLIT.svg"
import HSV from "../assets/partners/HSV.svg"

import InfiniteLooper from "../components/InfiniteLooper"

const useStyles = makeStyles(theme => ({
    root: {
        ...section,
        ...defaultFont,
        paddingTop: "60px",
        paddingBottom: "60px",
        gap: "40px !important",
        [theme.breakpoints.down("xs")]: {
            gap: "12px",
            paddingTop: "40px",
            paddingBottom: "40px",
        },
    },
    headerStyle,
    logo: {
        height: "100px",
        "&:last-of-type": {
            marginRight: "100px"
        },
        [theme.breakpoints.down("xs")]: {
            height: "50px", 
            "&:last-of-type": {
                marginRight: "20px"
            },
        },
    }
}))

export default function Partners() {
    const classes = useStyles()

    const partners = [
        {
            text: "Cuộc thi An toàn thông tin - HCMUS CTF",
            src: CTF
        },
        {
            text: "Cuộc thi học thuật Thách thức",
            src: ThachThuc
        },
        {
            text: "Câu lạc bộ SAB",
            src: SAB
        },
        {
            text: "CLB An toàn thông tin - Khoa Công nghệ thông tin - Trường Đại học Khoa học Tự nhiên",
            src: BlackPinker
        },
        {
            text: "Bản lĩnh IT",
            src: BLIT
        },
        {
            text: "Hội sinh viên",
            src: HSV
        },
    ]

    return (
        <div className={classes.root} id="partners">
            <div className={classes.headerStyle}>
                Đối tác
            </div>
            <InfiniteLooper speed="8" direction="left">
                {partners.map((partner) => (
                    <img src={partner.src} alt={partner.text} className={classes.logo} />
                ))}
            </InfiniteLooper>
        </div>
    )
}