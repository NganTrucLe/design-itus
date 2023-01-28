import { makeStyles } from "@material-ui/core"
import { cardStyle } from "../../../assets/components/glassmorphismStyle"

const useStyles = makeStyles((theme) => ({
    root: {
        ...cardStyle, 
        width: "fit-content", 
        height: "fit-content", 
        textAlign: "center", 
        padding: "10px 32px"
    }, 
    header: {
        fontSize: "16px", 
        fontWeight: 600,
        lineHeight: "23.38px", 
        [theme.breakpoints.up("sm")]: {
            fontSize: "20px", 
            lineHeight: "30px"
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "28px", 
            lineHeight: "41px"
        },
    }
}))

export default function Card(props) {
    const classes = useStyles()

    return (
        <div className={[classes.root, props.className].join(' ')}>
            <div className={classes.header}>
                {props.num}
            </div>
            <div>
                {props.description}
            </div>
        </div>
    )
}