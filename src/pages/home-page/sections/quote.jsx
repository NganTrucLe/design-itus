import { makeStyles } from "@material-ui/core"
import { cardStyle } from "../../../assets/components/glassmorphismStyle"
import { section } from "../../../assets/globalStyle"

const useStyles = makeStyles((theme) => ({
    root: {
        ...section,
        paddingTop: "60px",
        paddingBottom: "60px",
        alignItems: "center", 
    },
    card: {
        ...cardStyle,
        maxWidth: "853px", 
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        gap: "12px !important",
        padding: "12px 4px", 
        [theme.breakpoints.up("sm")]: {
            gap: "20px !important",
            padding: "20px 162px"
        },
    },
    quote: {
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "23.38px",
        [theme.breakpoints.up("sm")]: {
            fontSize: "20px",
            lineHeight: "30px",
        },
    }
}))

export default function Quote() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.card}>
                <div className={classes.quote}>
                    “Người trí thức nói điều đơn giản theo cách phức tạp.
                    <br />
                    Người nghệ sĩ nói điều phức tạp theo cách đơn giản.”
                </div>
                <div>
                    Charles Bukowski
                </div>
            </div>
        </div>
    )
}