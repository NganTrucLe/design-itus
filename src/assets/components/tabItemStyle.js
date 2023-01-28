import {
    primaryColor,
    neutralColors,
    whiteColor,
} from '../globalStyle.jsx';

const tabItemStyle = ({
    current: {
        display: "block",
        textDecoration: "none",
        marginLeft: "40px",
        cursor: "pointer",
        color: whiteColor,
        background: primaryColor,
        padding: "8px 12px",
        borderRadius: "50px",
        fontWeight: "600",
    },
    default: {
        display: "block",
        textDecoration: "none",
        marginLeft: "40px",
        cursor: "pointer",
        color: neutralColors[8],
        background: "none",
        padding: "8px 12px",
        borderRadius: "50px",
        fontWeight: "600",
    }
});
export default tabItemStyle;