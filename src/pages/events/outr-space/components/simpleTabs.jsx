import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TabItemStyle from '/src/assets/components/tabItemStyle';
import { defaultFont } from '../../../../assets/globalStyle';


const useStyles = makeStyles((theme) => ({
  root: {
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

function Tabs(props) {
  const classes = useStyles();
  const { children, value, onChange, ...other } = props;
  const handleClick = (index) => {
    return onChange(index);
  };
  return (
    <div {...other}>
      {
        children.map((child, index) => (
          <div className={classes.default} onClick={(index)=>{return onChange(index)}}>
            {child}
          </div>
        ))
      }
    </div>
  );
}


export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  console.log(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };

  return (
    <div className={classes.root}>
        <Tabs onChange={handleChange} className={classes.tabs}>
          <div>Truyện tranh</div>
          <div>Quay phim</div>
          <div>Hoạt hình</div>
        </Tabs>
        {/* <div className={classes.tabs}>
          <div className={classes.default} onClick={()=>handleChange(0)}>
            Truyện tranh
          </div>
          <div className={classes.default} onClick={()=>handleChange(1)}>
            Quay phim
          </div>
          <div className={classes.default} onClick={()=>handleChange(2)}>
            Hoạt hình
          </div>
        </div> */}
      <TabPanel value={value} index={0}>
        <ul>
          <li>
            Sản phẩm tham dự: bản phác thảo truyện
          </li>
          <li>
          Phác thảo là bản viết hay bản vẽ sơ lược những yếu tố chính cho sản phẩm, thường là những nét vẽ cơ bản, sơ sài, không quá trau chuốt nhưng thể hiện được ý tưởng.
          </li>
          Về hình thức nộp:
          Phác thảo máy: Nộp file PDF chứa các trang ý tưởng đã phác thảo.
          Phác thảo tay: Chụp lại các trang giấy phác thảo (càng rõ càng tốt), sử dụng CamScanner hoặc các phần mềm khác để scan các trang giấy và gom vào 1 file PDF, cũng chính là file cần nộp.
          Yêu cầu: Phác thảo từ 5 trang trở lên. Cho phép tham khảo và sử dụng “một phần” resources từ Internet và các nguồn khác, tuy nhiên phải ghi rõ credit. Nghiêm cấm việc sao chép hoàn toàn, sử dụng sản phẩm đã được công bố ở các cuộc thi, sự kiện khác.
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Sản phẩm tham dự: shotlist các cảnh quay
        Shotlist là một danh sách tổng hợp các chi tiết về cảnh quay, gồm những thông tin như thứ tự, địa điểm, thời gian, cỡ cảnh, góc máy, động tác máy, mô tả shot và scene,...
        Về hình thức nộp: Nộp file Excel để thể hiện rõ các chi tiết của shotlist. Tham khảo cách trình bày từ file Shotlist.xlsx
        Yêu cầu: Trình bày câu từ về các cảnh một cách rõ ràng, rành mạch, thể hiện rõ ý tưởng nhất có thể
      </TabPanel>
      <TabPanel value={value} index={2}>
        Storyboard là bảng vẽ chứa câu chuyện mà bạn muốn kể, giúp thể hiện tổng quát câu chuyện muốn kế.
        Về hình thức nộp:
        Storyboard trên máy: Xuất file vẽ dạng hình ảnh, nếu có nhiều hình thì gom lại trong một file nén .zip hoặc .rar.
        Storyboard vẽ tay: Chụp lại các trang giấy phác thảo (càng rõ càng tốt), sử dụng CamScanner hoặc các phần mềm khác để scan các trang giấy và gom vào 1 file PDF, cũng chính là file cần nộp.
        Yêu cầu: Mỗi scene phải được vẽ một cách rõ ràng, mang ý nghĩa thể hiện nội dung và có sự liên kết để đúng với mạch truyện. Những scene được bỏ vào có nội dung cụ thể, miêu tả nội dung video muốn hướng tới. Mỗi scene có thể thêm description ngắn để giải thích ý tưởng, không cần vẽ những phần cảnh không cần thiết, chỉ nên có nội dung chính của câu chuyện.
      </TabPanel>
    </div>
  );
}

