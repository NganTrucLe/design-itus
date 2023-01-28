import NavBar from "./components/navBar";
import Topic from "./sections/topic.jsx";
import Problem from "./sections/problem.jsx";
import Participants from "./sections/participants.jsx";
import HowToJoin from "./sections/howToJoin.jsx";
import Footer from "/src/components/footer.jsx";
import Blob from '/src/assets/decor/blob';
import { makeStyles } from "@material-ui/core";
import { section } from "/src/assets/globalStyle";

const useStyles = makeStyles(theme=> ({
    contentStyle: {
        ...section,
    },
    sectionStyle: {
        ...section,
        position: "relative",
        overflowX: "clip",
        overflowY: "visible"
    }
}));
export default function OutrSpace7() {
    const classes = useStyles();
    return (
        <div>
            <NavBar current="/events/outr-space-7"/>
            <section className={classes.sectionStyle}>
                <Topic short/>
            </section>
            <section className={classes.sectionStyle}>
                <Problem/>
                <Blob topPos="200px" leftPos="0px"/>
            </section>
            <section className={classes.sectionStyle}>
                <Participants/>
            </section>
            <section className={classes.sectionStyle}>
                <HowToJoin/>
            </section>
            <Footer/>
        </div>
    )
}