import { makeStyles } from "@material-ui/core";
import { NotListedLocationRounded } from "@material-ui/icons";
import { cardStyle } from "/src/assets/components/glassmorphismStyle";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        [theme.breakpoints.down("sm")]: {
            gap: "8px",
        }
    },
    cardLeft: {
        ...cardStyle,
        marginRight: "60px",
        [theme.breakpoints.down("sm")]: {
            marginRight: "40px",
        }
    },
    cardRight: {
        ...cardStyle,
        marginLeft: "60px",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "40px",
        }
    },
}));
export default function ListCard(props) {
    const classes = useStyles();
    const { children } = props;
    return (
        <div className={classes.root}>
            {props.children.map((child,index)=>(
                <div className={index%2==0?classes.cardLeft:classes.cardRight}>
                    {child}
                </div>
            ))}
        </div>
    );
};