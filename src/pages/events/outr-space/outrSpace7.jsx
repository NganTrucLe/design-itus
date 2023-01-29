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
    sectionStyle: {
        ...section,
    }
}));
export default function OutrSpace7() {
    const classes = useStyles();
    return (
        <div>
            <NavBar current="/events/outr-space-7"/>
            <section className={classes.sectionStyle}>
                <Topic short/>
                <Blob style={{top: "-100px", left: Math.floor(window.innerWidth/2 - 200).toString() + "px", width: "300px"}} type="bluepink"/>
            </section>
            <section className={classes.sectionStyle}>
                <Problem/>
                <Blob style={{width:"300px", right: "-150px"}} type="bluepink"/>
            </section>
            <section className={classes.sectionStyle}>
                <Participants/>
                <Blob style={{width:"200px", left: "150px"}} type="blueviolet"/>
                <Blob style={{width:"250px", right: "100px", bottom: "-10px"}} type="blueviolet"/>
            </section>
            <section className={classes.sectionStyle}>
                <HowToJoin/>
            </section>
            <Footer/>
        </div>
    )
}