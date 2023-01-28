import Button from "/src/components/button.jsx";

import NextArrowIcon from "/src/assets/icons/nextArrowIcon";

import logo from "/src/assets/logos/LogoDesignITUS.svg"

import { makeStyles } from "@material-ui/core";

import { section } from "../../../assets/globalStyle";
import { cardStyle } from "../../../assets/components/glassmorphismStyle";

import { headerStyle } from "../homePage";

const useStyles = makeStyles((theme) => ({
    root: {
        ...section, 
        justifyContent: "space-between", 
        paddingTop: "80px", 
        paddingBottom: "80px", 
        gap: "40px", 
        alignItems: "center", 
        [theme.breakpoints.up("md")]: {
            flexDirection: "row", 
        },
    },
    headerStyle: {
        ...headerStyle,
        alignSelf: "left"
    },
    left: {
        display: "flex",
        flexDirection: "column",
        gap: "20px", 
        textAlign: "center", 
        [theme.breakpoints.up("md")]: {
            width: "50%", 
            textAlign: "left"
        },
    },
    card: {
        ...cardStyle,
        display: "flex", 
        gap: "8px", 
        padding: "20px 12px", 
        height: "fit-content", 
        flexDirection: "column", 
        width: "fit-content", 
        [theme.breakpoints.up("sm")]: {
            flexDirection: "row", 
            gap: "20px", 
            padding: "60px 20px",
        },
    }, 
    logo: {
        height: "32px", 
        [theme.breakpoints.up("sm")]: {
            height: "60px"
        },
    }, 
    textRight: {
        fontWeight: 600, 
        textAlign: "center", 
        [theme.breakpoints.up("sm")]: {
            fontSize: "20px",
            textAlign: "left" 
        },
    }
}))

export default function WhoAreWe() {
    const classes = useStyles()

    return (
        <div className={classes.root} id="who-are-we">
            <div className={classes.left}>
                <div className={classes.headerStyle}>Chúng tôi là ai?</div>
                <div> Design ITUS được thành lập vào ngày 25 tháng 10 năm 2010, là câu lạc bộ học thuật đầu tiên của khoa Công nghệ thông tin, trường ĐH Khoa học tự nhiên, ĐHQG TPHCM.
                    Design ITUS là Câu lạc bộ Học thuật Thiết kế, nơi dành cho những bạn trẻ có niềm đam mê về thiết kế đồ hoạ, UI/UX, nhiếp ảnh, dựng phim, video, vẽ tay và kỹ thuật số.</div>
                <Button href="/about-us" endIcon={<NextArrowIcon />}>Tìm hiểu thêm</Button>
            </div>
            <div className={classes.card}>
                <img src={logo} className={classes.logo} />
                <div className={classes.textRight}>DESIGN ITUS <br />
                    Câu lạc bộ học thuật thiết kế</div>
            </div>
        </div>
    )
}