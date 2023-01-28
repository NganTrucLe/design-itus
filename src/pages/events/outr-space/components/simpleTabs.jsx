import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TabItemStyle from '/src/assets/components/tabItemStyle';
import { defaultFont } from '../../../../assets/globalStyle';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  default: {
    ...TabItemStyle.default,
    marginLeft: "0px",
  },
  selected: {
    ...TabItemStyle.current,
    marginLeft: "0px",
  },
  tabs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: "40px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    }
  },
  image: {
    objectFit: "cover",
    width: "100%",
    marginTop: "20px",
    height: "280px",
    objectPosition: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: "8px",
      height: "197px",
    }
  }
  
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
          <div>{children}</div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  console.log(value);
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const tab = ["Truyện tranh", "Quay phim", "Hoạt hình"];

  return (
    <div className={classes.root}>
      <div onChange={handleChange} className={classes.tabs}>
        {
          tab.map((child, index) => (
            index === value? 
            <div className={classes.selected} onClick={() => handleChange(index)}>
              {child}
            </div>:
            <div className={classes.default} onClick={() => handleChange(index)}>
              {child}
            </div>
          ))
        }
      </div>
      <TabPanel value={value} index={0}>
        <div>
          - Sản phẩm tham dự: bản phác thảo truyện
        </div>
        <div>
        - Phác thảo là bản viết hay bản vẽ sơ lược những yếu tố chính cho sản phẩm, thường là những nét vẽ cơ bản, sơ sài, không quá trau chuốt nhưng thể hiện được ý tưởng.
        </div>
        <div>
          - Về hình thức nộp:
        </div>
        <ul>
          <li>
          Phác thảo máy: Nộp file PDF chứa các trang ý tưởng đã phác thảo.
          </li>
          <li>
          Phác thảo tay: Chụp lại các trang giấy phác thảo (càng rõ càng tốt), sử dụng CamScanner hoặc các phần mềm khác để scan các trang giấy và gom vào 1 file PDF, cũng chính là file cần nộp.
          </li>
        </ul>
        <div>
          - Yêu cầu: Phác thảo từ 5 trang trở lên. Cho phép tham khảo và sử dụng “một phần” resources từ Internet và các nguồn khác, tuy nhiên phải ghi rõ credit. Nghiêm cấm việc sao chép hoàn toàn, sử dụng sản phẩm đã được công bố ở các cuộc thi, sự kiện khác.
        </div>
        <img className={classes.image} src="\src\assets\images\327563354_507667898162636_7504822791758146506_n.jpg"/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          - Sản phẩm tham dự: shotlist các cảnh quay
        </div>
        <div>
          - Shotlist là một danh sách tổng hợp các chi tiết về cảnh quay, gồm những thông tin như thứ tự, địa điểm, thời gian, cỡ cảnh, góc máy, động tác máy, mô tả shot và scene,...
        </div>
        <div>
          - Về hình thức nộp: Nộp file Excel để thể hiện rõ các chi tiết của shotlist. Tham khảo cách trình bày từ file Shotlist.xlsx
        </div>
        <div>
          - Yêu cầu: Trình bày câu từ về các cảnh một cách rõ ràng, rành mạch, thể hiện rõ ý tưởng nhất có thể
        </div> 
        <img className={classes.image} src="\src\assets\images\edited.jpg"/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          - Storyboard là bảng vẽ chứa câu chuyện mà bạn muốn kể, giúp thể hiện tổng quát câu chuyện muốn kế.
        </div>
        <div>
          - Về hình thức nộp:
        </div>
        <ul>
          <li>
            Storyboard trên máy: Xuất file vẽ dạng hình ảnh, nếu có nhiều hình thì gom lại trong một file nén .zip hoặc .rar.
          </li>
          <li>
            Storyboard vẽ tay: Chụp lại các trang giấy phác thảo (càng rõ càng tốt), sử dụng CamScanner hoặc các phần mềm khác để scan các trang giấy và gom vào 1 file PDF, cũng chính là file cần nộp.
          </li>
        </ul>
        <div>
          - Yêu cầu: Mỗi scene phải được vẽ một cách rõ ràng, mang ý nghĩa thể hiện nội dung và có sự liên kết để đúng với mạch truyện. Những scene được bỏ vào có nội dung cụ thể, miêu tả nội dung video muốn hướng tới. Mỗi scene có thể thêm description ngắn để giải thích ý tưởng, không cần vẽ những phần cảnh không cần thiết, chỉ nên có nội dung chính của câu chuyện.
        </div>
        <img className={classes.image} src="\src\assets\images\327563354_507667898162636_7504822791758146506_n.jpg"/>
      </TabPanel>
    </div>
  );
}

