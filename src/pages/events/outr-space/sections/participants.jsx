import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import { cardStyle } from "/src/assets/components/glassmorphismStyle";
import PeopleIcon from "/src/assets/icons/peopleIcon.jsx";
import EducationIcon from "/src/assets/icons/educationIcon.jsx";
import PenToolIcon from "/src/assets/icons/penToolIcon.jsx";

const useStyles = makeStyles(theme=> ({
    sectionStyle: {
        height: "300px",
        alignContent: "center",
        [theme.breakpoints.down("sm")]: {
           height: "auto", 
        }
    },
    list: {
        display: "flex",
        flexDirection: "row",
        gap: "20px",
    },
    card: {
        ...cardStyle,
        padding: "20px",
        width: "304px",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
            width: "auto"
        },
    },
    icon: {
        height: "40px",
        width: "40px",
        [theme.breakpoints.down("sm")]: {
            height: "32px",
            width: "32px",
        }
    },
    item: {
        display: "flex",
        justifyContent: "center",
    }
}));
export default function Topic() {
    const classes = useStyles();
    const content = [
        {
            icon: <PeopleIcon className={classes.icon}/>,
            text: <div>Đội từ 2 - 4 người.<br/>
            Những thí sinh đăng ký cá nhân sẽ được hỗ trợ tìm đồng đội.</div>,
        },
        {
            icon: <EducationIcon className={classes.icon}/>,
            text: <div >Các bạn trẻ từ 16 tuổi trở lên đang là học sinh sinh viên trên toàn quốc.</div>,
        },
        {
            icon: <PenToolIcon className={classes.icon}/>,
            text: <div>Có niềm đam mê sáng tạo ở các lĩnh vực thiết kế, vẽ, nhiếp ảnh,...</div>
        }
    ];
    return (
        <Grid container spacing={4} justifyContent = "space-between" className={classes.sectionStyle}>
            <Grid item xs={12} className={classes.item}>
                <h1>Đối tượng tham gia</h1>
            </Grid>
            {content.map((item)=>(
                <Grid item xs={12} md={4} className={classes.item}>
                    <div className={[classes.card, classes.list].join(" ")}>
                        {item.icon}
                        {item.text}
                    </div>
                </Grid>
            ))}
        </Grid>
    );
}