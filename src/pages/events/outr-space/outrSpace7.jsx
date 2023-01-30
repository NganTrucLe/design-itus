import NavBar from "./components/navBar";
import Topic from "./sections/topic.jsx";
import Problem from "./sections/problem.jsx";
import Participants from "./sections/participants.jsx";
import HowToJoin from "./sections/howToJoin.jsx";
import Blob from '/src/assets/decor/blob';
import Circle from '/src/assets/decor/circle';
import { makeStyles } from "@material-ui/core";
import { section } from "/src/assets/globalStyle";

const useStyles = makeStyles(theme=> ({
    sectionStyle: {
        ...section,
        [theme.breakpoints.down("xs")]: {
            marginBottom: "60px"
        }
    }
}));
export default function OutrSpace7() {
    const classes = useStyles();
    return (
        <div>
            <NavBar current="/events/outr-space-7"/>
            <section className={classes.sectionStyle}>
                <Topic short/>
                <Blob style={{top: "-30%", left: "30%"}} size="large" type="bluepink"/>
                <Circle type="blue" style={{top:"-30%",right:"-8%"}}/>
                <Circle type="pink" style={{top:"-25%",right:"8%"}}/>
            </section>
            <section className={classes.sectionStyle}>
                <Problem/>
                <Blob style={{right: "-5%"}} type="bluepink" size="medium"/>
                <Circle type="violet" style={{top:"-10%",left:"-40%"}}/>
            </section>
            <section className={classes.sectionStyle}>
                <Participants/>
                <Blob style={{left: "10%"}} type="pinkviolet" size="medium"/>
                <Blob style={{right: "10%", bottom: "-1%"}} type="blueviolet" size="small"/>
                <Circle type="blue" style={{top:"-5%", right: "40%"}} small/>
                <Circle type="pink" style={{top:"0%", left: "40%"}} small/>
            </section>
            <section className={classes.sectionStyle}>
                <HowToJoin/>
            </section>
        </div>
    )
}