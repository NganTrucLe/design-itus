import React from "react";
import Button from '/src/components/button.jsx';
import NextArrowIcon from "/src/assets/icons/nextArrowIcon";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import BigNumberList from "../components/bigNumberList";
const useStyles = makeStyles(theme=> ({
    sectionStyle: {
        height: "600px",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
           height: "auto", 
           flexDirection: "column-reverse"
        }
    },
    list: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        [theme.breakpoints.down("sm")]: {
            gap: "20px"
        },
    },
    data: {
        gap: "80px",
        [theme.breakpoints.down("sm")]: {
            gap: "20px",
        }
    }
}));
export default function Topic() {
    const classes = useStyles();
    const steps = [ 
        "Hãy chắc rằng bạn đã đọc kỹ nội dung, chủ đề của cuộc thi, yêu cầu từng hạng mục dự thi, các thông tin liên quan, điều khoản, kỹ thuật mà BTC đã đưa ra.",
        "Hãy chuẩn bị kỹ lưỡng nội dung, tác phẩm dự thi, xem kỹ quy cách nộp bài và yêu cầu từng hạng mục. Gửi tác phẩm dự thi về mail của Design ITUS designclub@fithcmus.edu.vn",
        "Ban giám khảo sẽ chấm bài dự thi của các đội gửi về. Sản phẩm đáp ứng các tiêu chuẩn về nội dung, ý nghĩa, thẩm mỹ sẽ bước vào vòng trong để hoàn thiện sản phẩm và ra mắt vào buổi Demo day.",
    ];
    return (
        <Grid container spacing={4} justifyContent = "space-between" className={classes.sectionStyle}>
            <Grid item xs={12} md={6}>
                {
                    steps.map((step, index)=>(
                        <BigNumberList align={index%2==0?"left":"right"} number={index+1} content={step}></BigNumberList>
                    ))
                }
            </Grid>
            <Grid item xs={12} md={5}>
                <div className={classes.list}>
                    <h1>Cách thức nộp bài</h1>
                    <p>
                    Hãy viết tiếp câu chuyện trong đó có lồng ghép phương án giải quyết vấn đề. Đồng thời giải thích phương án, ý tưởng đó ngắn gọn và cũng không quên kèm theo bản phác thảo ý tưởng sản phẩm theo hạng mục bạn chọn.
                    </p>
                    <Button href="/events/outr-space-7/how-to-join" endIcon={<NextArrowIcon/>}>Chi tiết</Button>
                </div>
            </Grid>
            
        </Grid>
    );
}