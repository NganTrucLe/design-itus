import { defaultFont, primaryColor, whiteColor } from "../globalStyle";
import { cardStyle } from "./glassmorphismStyle";
const buttonStyle = theme => ({
    button: {
        ...defaultFont,
        boxShadow: "none",
        display: "inline-flex",
        justifyContent: "center",
        width: "auto",
        padding: "12px 20px 12px 20px",
        textTransform: "none",
        backgroundColor: primaryColor,
        color: whiteColor,
        borderRadius: "50px",
        "&:hover": {
            ...cardStyle,
            boxShadow: "none",
            color: primaryColor + "!important",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "13px",
            padding: "8px 12px 8px 12px",
        },
    },
});
export default buttonStyle;