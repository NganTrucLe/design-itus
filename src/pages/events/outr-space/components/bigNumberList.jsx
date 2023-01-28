import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import { primaryColors } from "/src/assets/globalStyle";

const useStyles = makeStyles(theme => ({
    number: {
        fontSize: "140px",
        lineHeight: "196px",
        color: primaryColors[0],
        fontWeight: "800",
        [theme.breakpoints.down("sm")]: {
            fontSize: "60px",
            lineHeight: "87.66px",
        }
    },
    reverseContainer: {
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
    },
    contentStyle: {
        marginTop: "100px",
        marginLeft: "-54px",
        marginBottom: "8px",
        zIndex: 1000,
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "-28px",
            marginTop: "44px",
        }
    },
    reverseContentStyle: {
        marginTop: "100px",
        marginRight: "-54px",
        marginBottom: "8px",
        zIndex: 1000,
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            marginRight: "-28px",
            marginTop: "44px",
        }
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }
}));
function BigNumberList(props) {
    const classes = useStyles();
    const {
        number, 
        content,
        align,
    } = props;
    const directionContainer = () => {
        return props.align=="right"?classes.reverseContainer:classes.container;
    };
    const directionContent = () => {
        return props.align=="right"?classes.reverseContentStyle:classes.contentStyle;
    };
    return (
        <div className={directionContainer()}>
            <div className={classes.number}>{props.number<10?"0":""}{props.number}</div>
            <div className={directionContent()}>{props.content}</div>
        </div>
    );
}

BigNumberList.propsType = {
    number: PropTypes.number,
    content: PropTypes.string,
    align: PropTypes.oneOf(["right", "left"]),
};

export default BigNumberList;