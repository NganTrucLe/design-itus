import React from "react";
import Button from '/src/components/button.jsx';
import NextArrowIcon from "/src/assets/icons/nextArrowIcon";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles(theme=> ({
    sectionStyle: {
        height: "600px",
        marginTop: "72px",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
           height: "auto", 

        }
    },
    list: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        [theme.breakpoints.down("sm")]: {
            gap: "8px"
        },
    },
    linearTransparent: {
        background: "linear-gradient(180deg, #000000 37.87%, rgba(0, 0, 0, 0) 100%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        "background-clip": "text",
        "text-fill-color": "transparent",
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
    return (
        <Grid container spacing={4} justifyContent = "space-between" className={classes.sectionStyle}>
            <Grid item xs={12} md={6}>
                <div className={classes.list}>
                    <h1>Outr Space 7: SIDE</h1>
                    <p className={classes.linearTransparent}>
                    Trên hành tinh SuTi, nơi mà DiDi đang sinh sống hiện nay, cuộc sống đã và đang phát triển rất hùng mạnh thế nhưng các nguồn nguyên liệu mà SuTi đang sử dụng hiện tại lại đang để lại một hậu quả vô cùng nghiêm trọng - Ô nhiễm môi trường. Các nhà chức trách tại đây đã đưa ra những cảnh báo về việc thay đổi thời tiết, các thiên tai như bão, lũ lụt… ngày càng xảy ra mãnh liệt hơn, môi trường sống của một số loài động vật đang trên đà bị hủy hoại dẫn tới việc cấp bách bây giờ là phải tìm ra một loại nguyên liệu sạch vừa giúp duy trì sự sống trên SuTi vừa không gây ô nhiễm môi trường.
                    <br/> <br/>Sau một thời gian nỗ lực tìm kiếm, trên các trang thông tin xuất hiện một số tọa độ của một nguồn năng lượng tồn tại bên ngoài hành tinh và nguồn năng lượng ấy vừa hay chính là thứ mà SuTi đang cần tìm. Thế nhưng không có gì 
                    </p>
                    <Button href="/events/outr-space-7/topic" endIcon={<NextArrowIcon/>}>Xem toàn bộ</Button>
                </div>
            </Grid>
            <Grid item xs={12} md={5} className={[classes.list, classes.data].join(" ")} >
                <div className={classes.list}>
                    <h3>Truyền đạt thông tin</h3>
                    <p>
                    Sự phát triển của truyền thông càng nhanh thì độ tin cậy thông tin càng phức tạp, bên cạnh những nguồn thông tin xác thực, đúng sự thật thì vô số thông tin chạy theo thị hiếu, giật tít, câu view, làm sai lệch nhận thức người đọc vẫn được lưu hành.
                    </p>
                </div>
                <div className={classes.list}>
                    <h3>Tâm lý con người</h3>
                    <p>
                    Với sự phát triển không ngừng của internet, thông tin trên các trang mạng xã hội ngày càng được lan rộng, thiếu sự kiểm soát mạnh mẽ. Những lỗ hổng trong công tác quản lý và xác thực đã dẫn đến thông tin bị lợi dụng, biến đổi sai lệch, phát tán rộng rãi với mục đích lôi kéo dụ dỗ dư luận hay còn gọi là “thao túng tâm lý”.
                    </p>
                </div>
            </Grid>
        </Grid>
    );
}