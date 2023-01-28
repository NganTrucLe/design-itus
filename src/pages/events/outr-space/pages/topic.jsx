import { makeStyles } from "@material-ui/core";

import NavBar from "../components/navBar";
import TopicSection from "../sections/topic";
import { section } from "/src/assets/globalStyle";
import { cardStyle } from "/src/assets/components/glassmorphismStyle";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme=> ({
    contentStyle: {
        ...section,
    },
    dataSection: {
        minHeight: "300px",
        alignItems: "center",
    },
    card: {
        ...cardStyle,
        padding: "20px",
        [theme.breakpoints.down("sm")]: {
            padding: "8px 16px",
            width: "auto"
        }   
    },
    listCard: {
        display: "flex",
        flexDirection: "row",
        gap: "32px",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            gap: "20px",
        }
    },
    list: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        justifyContent: "center",
    },
    reverse: {
        flexDirection: "row-reverse"
    }
}));

export default function Topic() {
    const classes = useStyles();
    return (
        <div>
            <NavBar current = "/events/outr-space-7/topic"/>
            <div className={classes.contentStyle}>
                <TopicSection/>
                <Grid container spacing={4} justifyContent="space-between" className={[classes.dataSection, classes.reverse].join(" ")}>
                    <Grid item xs={12} md={5} className={classes.list} >
                        <h3>Truyền đạt thông tin</h3>
                        <p>
                        Sự phát triển của truyền thông càng nhanh thì độ tin cậy thông tin càng phức tạp, bên cạnh những nguồn thông tin xác thực, đúng sự thật thì vô số thông tin chạy theo thị hiếu, giật tít, câu view, làm sai lệch nhận thức người đọc vẫn được lưu hành.
                        </p>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.listCard}>
                        <div className={classes.card}>Số liệu 1: Lorem ipsum dolor sit amet, consec adipiscing elit, sed do</div>
                        <div className={classes.card}>Số liệu 2: Lorem ipsum dolor sit amet, consec adipiscing elit, sed do</div>
                        <div className={classes.card}>Số liệu 3: Lorem ipsum dolor sit amet, consec adipiscing elit, sed do</div>
                    </Grid>
                </Grid>
                <Grid container spacing={4} justifyContent="space-between" className={classes.dataSection}>
                    <Grid item xs={12} md={5} className={classes.list} >
                        <h3>Tâm lý con người</h3>
                        <p>
                        Với sự phát triển không ngừng của internet, thông tin trên các trang mạng xã hội ngày càng được lan rộng, thiếu sự kiểm soát mạnh mẽ. Những lỗ hổng trong công tác quản lý và xác thực đã dẫn đến thông tin bị lợi dụng, biến đổi sai lệch, phát tán rộng rãi với mục đích lôi kéo dụ dỗ dư luận hay còn gọi là “thao túng tâm lý”.                        </p>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.listCard}>
                        <div className={classes.card}>Số liệu 1: Lorem ipsum dolor sit amet, consec adipiscing elit, sed do</div>
                        <div className={classes.card}>Số liệu 2: Lorem ipsum dolor sit amet, consec adipiscing elit, sed do</div>
                        <div className={classes.card}>Số liệu 3: Lorem ipsum dolor sit amet, consec adipiscing elit, sed do</div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}