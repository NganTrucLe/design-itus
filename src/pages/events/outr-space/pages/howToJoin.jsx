import NavBar from "../components/navBar";
import Tab from "../components/simpleTabs";
import { Grid } from "@material-ui/core";
import { section } from "/src/assets/globalStyle";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    section,
}))
export default function HowToJoin() {
    const classes = useStyles();
    return (
        <div>
            <NavBar current = "/events/outr-space-7/how-to-join"/>
            <div className={classes.section}>
                <Grid container spacing={4} justifyContent="space-between" style={{marginTop: "184px"}} >
                    <Grid item xs={12} md={6}></Grid>
                    <Grid item xs={12} md={5}>
                        <Tab/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}