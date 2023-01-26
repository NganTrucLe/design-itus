import { defaultFont, primaryColor, whiteColor } from "../globalStyle";
const buttonStyle = theme => ({
    button: {
        ...defaultFont,
        textTransform: "none",
        backgroundColor: primaryColor,
        color: whiteColor,
        transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        [theme.breakpoints.down("sm")]: {
            fontSize: "13px",
        }
    },
});
export default buttonStyle;