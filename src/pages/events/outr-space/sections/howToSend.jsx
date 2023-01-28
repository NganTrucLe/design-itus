import { makeStyles } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";
import { cardStyle } from "/src/assets/components/glassmorphismStyle";
const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        marginBottom: "50px",
        [theme.breakpoints.down("sm")]: {
            gap: "8px",
            marginTop: "0px",
            marginBottom: "0px",
        }
    },
    card: {
        ...cardStyle,
        width: "794px"
    }
}));
export default function HowToSend() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>Cách thức nộp</h1>
            <div className={classes.card}>
                <div>
                    Các đội thi nộp bài qua phương thức gửi email đến designclub@fithcmus.edu.vn với các yêu cầu:
                </div>
                <ul>
                    <li>
                        Thông tin các thành viên
                    </li>
                    <li>
                    Link drive có chứa sản phẩm vòng 1 (yêu cầu những thời gian chỉnh sửa các file nằm trong thời gian làm bài thi).
                    </li>
                </ul>
            </div>
        </div>
    );
}