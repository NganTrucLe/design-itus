import NavBar from "./components/navBar";
import Topic from "./sections/topic.jsx";
import Problem from "./sections/problem.jsx";
import Participants from "./sections/participants.jsx";
import HowToJoin from "./sections/howToJoin.jsx";
import { makeStyles } from "@material-ui/core";
import { section } from "/src/assets/globalStyle";

const useStyles = makeStyles(theme=> ({
    contentStyle: {
        ...section,
    }
}));
export default function OutrSpace7() {
    const classes = useStyles();
    return (
        <div>
            <NavBar current="/events/outr-space-7"/>
            <div className={classes.contentStyle}>
                <Topic short/>
                <Problem/>
                <Participants/>
                <HowToJoin/>
            </div>
        </div>
    )
}