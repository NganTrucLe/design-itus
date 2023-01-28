import React from "react";
import Button from '/src/components/button.jsx';
import NextArrowIcon from "/src/assets/icons/nextArrowIcon";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { emphasisColor } from '/src/assets/globalStyle';
const useStyles = makeStyles(theme=> ({
    sectionStyle: {
        height: "340px",
        alignItems: "start",
        [theme.breakpoints.down("sm")]: {
           height: "auto", 
        }
    },
    list: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            gap: "8px"
        },
    },
    title: {
        fontSize: "48px",
        lineHeight: "80px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px",
            lineHeight: "30px",
        },
    },
    paragraph: {
        textAlign: "center",
    }
}));
export default function Topic() {
    const classes = useStyles();
    return (
        <Grid container spacing={4} justifyContent = "space-between" className={classes.sectionStyle}>
            <Grid item sm={12}>
                <div className={classes.list}>
                    <h1 className={classes.title}>Khi <span style={{color: emphasisColor}}>thật và giả</span> lẫn lộn...</h1>
                    <p className={classes.paragraph}>
                        ...muôn vàn khó khăn đến từ những “tọa độ ma”...
                        <br/>...câu đố từ Sinh vật khổng lồ huyền bí cai quản nguồn năng lượng...
                        <br/>...hai hành tinh cho một câu trả lời...
                        <br/>...đâu là giả...
                        <br/>...đâu là thật...
                        <br/>
                        <br/>DiDi sẽ làm cách nào để tìm ra được đúng hành tinh tồn tại nguồn năng lượng đó?                    
                    </p>
                </div>
            </Grid>
        </Grid>
    );
}