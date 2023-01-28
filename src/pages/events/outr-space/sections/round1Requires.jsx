import { makeStyles } from "@material-ui/core";
import ListCard from "../components/listCard";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        [theme.breakpoints.down("sm")]: {
            gap: "8px"
        }
    }
}));
export default function Round1Requires() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>Yêu cầu vòng 1</h1>
            <ul>
                <li>
                Dựa trên câu chuyện trên, mỗi đội thi sẽ viết tiếp câu chuyện chuyển tiếp và lồng ghép hướng giải quyết vấn đề.
                </li>
                <li>
                Tại vòng này các đội chơi sẽ phải trình bày được một câu chuyện hoàn chỉnh và kỹ năng thiết kế của mình qua sản phẩm demo.
                </li>
                <li>
                BTC sẽ đánh giá câu chuyện và thông điệp của các đội được soạn thảo trên Word, yêu cầu nội dung bao gồm:
                </li>
            </ul>
            <ListCard>
                <div>Quan điểm cá nhân của đội để làm ý tưởng cho câu chuyện, về vấn đề "Sai lệch thông tin đúng/sai" và "Tâm lý con người" hiện nay (khoảng dưới 200 chữ).</div>
                <div>Câu chuyện hoàn chỉnh được viết tiếp với phần mở đầu được đưa ra từ BTC (ít nhất 200 chữ).</div>
                <div>Giải thích những ngữ nghĩa, hình ảnh, ẩn dụ quan trọng trong câu chuyện, những chi tiết mang tính chất cốt lõi của câu chuyện.</div>
            </ListCard>
        </div>
    )
}