import { defaultFont, primaryColor, whiteColor } from "../globalStyle";
import { cardStyle } from "./glassmorphismStyle";
const buttonStyle = theme => ({
    button: {
        ...defaultFont,
        boxShadow: "none",
        display: "inline-flex",
        justifyContent: "center",
        width: "auto",
        padding: "12px 20px",
        textTransform: "none",
        backgroundColor: primaryColor,
        color: whiteColor,
        borderRadius: "50px",
        border: "2px solid" + primaryColor,
        transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
            ...cardStyle,
            padding: "12px 20px",
            borderRadius: "50px",
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