import { makeStyles } from "@material-ui/core"

import waveTop from "../assets/heroBanner/wave2.svg"
import waveMiddle from "../assets/heroBanner/wave.svg"
import waveBottom from "../assets/heroBanner/wave1.svg"

import "../assets/wave.css"

const useStyles = makeStyles((theme) => ({
    waveWrapper: {
        overflow: "hidden",
        marginTop: "-350px", 
        [theme.breakpoints.up("sm")]: {
            marginTop: "-373px"
        },
        [theme.breakpoints.up("md")]: {
            marginTop: "-150px"
        },
    },
    waveWrapperInner: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
    },
    bgTop: {
        zIndex: 15,
        opacity: 0.5
    }, 
    bgMiddle: {
        zIndex: 10,
        opacity: 0.75, 
        marginTop: "-100px"
    },
    bgBottom: {
        zIndex: 5,
        marginTop: "-77px", 
        marginBottom: "192px", 
        [theme.breakpoints.up("md")]: {
            marginBottom: 0
        },
    }
}))

export default function Wave() {
    const classes = useStyles()
    return (
        <div className={classes.waveWrapper}>
             <div className={[classes.waveWrapperInner, classes.bgTop].join(' ')}>
                <div class="wave waveTop">
                    <img src={waveTop} />
                </div>
            </div>
            <div className={[classes.waveWrapperInner, classes.bgMiddle].join(' ')}>
                <div class="wave waveMiddle">
                    <img src={waveMiddle} />
                </div>
            </div>
            <div className={[classes.waveWrapperInner, classes.bgBottom].join(' ')}>
                <div class="wave waveBottom">
                    <img src={waveBottom} />
                </div>
            </div>
        </div>
    )
}