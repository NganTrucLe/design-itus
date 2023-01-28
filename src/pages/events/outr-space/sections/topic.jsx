import React from "react";
import PropTypes from "prop-types";

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
            gap: "8px",
        }
    },
    message: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        [theme.breakpoints.down("sm")]: {
            gap: "8px",
        }
    },
    linearTransparent: {
        background: "linear-gradient(180deg, #000000 37.87%, rgba(0, 0, 0, 0) 100%)",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        "background-clip": "text",
        "text-fill-color": "transparent",
        overflow: "hidden",
        "text-overflow": "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": "11",
        lineClamp: "11",
        maxHeight: "276px"
    },
    data: {
        gap: "80px",
        [theme.breakpoints.down("sm")]: {
            gap: "20px",
        }
    }
}));

function RenderButton(short) {
    if (short === true) {
        return (<Button href="/events/outr-space-7/topic" endIcon={<NextArrowIcon/>}>Xem toàn bộ</Button>);
    }
}

function RenderMessages(short) {
    const classes = useStyles();
    if (short === true) return (
        <Grid item xs={12} md={5} className={[classes.list, classes.data].join(" ")} >
            <div className={classes.message}>
                <h3>Truyền đạt thông tin</h3>
                <p>
                Sự phát triển của truyền thông càng nhanh thì độ tin cậy thông tin càng phức tạp, bên cạnh những nguồn thông tin xác thực, đúng sự thật thì vô số thông tin chạy theo thị hiếu, giật tít, câu view, làm sai lệch nhận thức người đọc vẫn được lưu hành.
                </p>
            </div>
            <div className={classes.message}>
                <h3>Tâm lý con người</h3>
                <p>
                Với sự phát triển không ngừng của internet, thông tin trên các trang mạng xã hội ngày càng được lan rộng, thiếu sự kiểm soát mạnh mẽ. Những lỗ hổng trong công tác quản lý và xác thực đã dẫn đến thông tin bị lợi dụng, biến đổi sai lệch, phát tán rộng rãi với mục đích lôi kéo dụ dỗ dư luận hay còn gọi là “thao túng tâm lý”.
                </p>
            </div>
        </Grid>
    ); 
}
function Topic(props) {
    const classes = useStyles();
    const {
        short
    } = props;
    return (
        <Grid container spacing={4} justifyContent = "space-between" className={classes.sectionStyle}>
            <Grid item xs={12} md={props.short?6:12}>
                <div className={classes.list}>
                    <h1>Outr Space 7: SIDE</h1>
                    <p className={props.short?classes.linearTransparent:""}>
                    Trên hành tinh SuTi, nơi mà DiDi đang sinh sống hiện nay, cuộc sống đã và đang phát triển rất hùng mạnh thế nhưng các nguồn nguyên liệu mà SuTi đang sử dụng hiện tại lại đang để lại một hậu quả vô cùng nghiêm trọng - Ô nhiễm môi trường. Các nhà chức trách tại đây đã đưa ra những cảnh báo về việc thay đổi thời tiết, các thiên tai như bão, lũ lụt… ngày càng xảy ra mãnh liệt hơn, môi trường sống của một số loài động vật đang trên đà bị hủy hoại dẫn tới việc cấp bách bây giờ là phải tìm ra một loại nguyên liệu sạch vừa giúp duy trì sự sống trên SuTi vừa không gây ô nhiễm môi trường.
                    <br/>Sau một thời gian nỗ lực tìm kiếm, trên các trang thông tin xuất hiện một số tọa độ của một nguồn năng lượng tồn tại bên ngoài hành tinh và nguồn năng lượng ấy vừa hay chính là thứ mà SuTi đang cần tìm. Thế nhưng không có gì đảm bảo rằng các nguồn tin tức ấy là đúng hay sai. Để xác thực nó, chỉ còn cách là tự mình đi kiểm chứng. Trước tình hình đó, một số người dũng cảm yêu nước đã lên đường đi tìm thứ năng lượng ấy dựa trên các tọa độ được cung cấp và DiDi cũng là một trong số đó.
                    <br/>Thế là, DiDi đã bắt đầu cuộc hành trình khám phá dãy ngân hà dựa trên danh sách 2023 tọa độ đã thu thập được từ các nguồn thông tin trên mạng. Sau nhiều lần đi đến các “tọa độ ma” - lúc thì gặp phải hố đen, lúc thì lạc trôi ở một bãi rác vũ trụ,… DiDi dần vụt tắt hy vọng... Thời khắc con tàu vũ trụ cạn kiệt nhiên liệu, DiDi chỉ có thể do thám thêm một hành tinh nữa và trở về SuTi một cách an toàn. May mắn thay, đây cũng là lúc DiDi đi đến “địa chỉ “ cuối cùng trong danh sách.
                    <br/>Bỗng nhiên một sinh vật khổng lồ xuất hiện và nói: “Ngươi cũng đến đây vì nguồn năng lượng này đúng không?”
                    <br/>DiDi trả lời: “Đúng vậy, tôi cần nguồn năng lượng này để cứu sống hành tinh của tôi”.
                    <br/>Sinh vật khổng lồ đáp: “Làm sao ta tin ngươi được? Những kẻ tham lam đến đây cũng nói lời cao cả như vậy… Thôi được rồi ta sẽ cho ngươi biết một điều, một trong hai hành tinh sở hữu tài nguyên.”
                    <br/>DiDi sẽ làm cách nào để tìm ra được đúng hành tinh tồn tại nguồn năng lượng đó?
                    </p>
                    {RenderButton(props.short)}
                </div>
            </Grid>
            {RenderMessages(props.short)}
        </Grid>
    );
}

Topic.propsType = {
    short: PropTypes.bool
};

export default Topic;