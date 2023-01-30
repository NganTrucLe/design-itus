import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { pastelPinkColor, pastelBlueColor, pastelVioletColor, hexToRgb } from '../globalStyle';
import { SvgIcon } from '@material-ui/core';
import './animate.css';

const colors = [pastelBlueColor, pastelPinkColor, pastelVioletColor];
const randomPath = [
    "M450.5,327.5Q405,405,327.5,436.5Q250,468,195,414Q140,360,113.5,305Q87,250,106,187.5Q125,125,187.5,89Q250,53,318.5,83Q387,113,441.5,181.5Q496,250,450.5,327.5Z;",
    "M425,331.5Q413,413,331.5,431Q250,449,181.5,418Q113,387,99.5,318.5Q86,250,84.5,166.5Q83,83,166.5,65.5Q250,48,305,94Q360,140,398.5,195Q437,250,425,331.5Z;",
    "M418.78863,313.92829Q377.85658,377.85658,313.92829,403.40571Q250,428.95484,179.34905,410.12837Q108.6981,391.3019,91.35658,320.65095Q74.01505,250,91.70186,179.69433Q109.38867,109.38867,179.69433,86.66224Q250,63.93581,332.92452,74.04338Q415.84905,84.15095,437.78486,167.07548Q459.72068,250,418.78863,313.92829Z;",
    "M401.11131,313.21022Q376.42045,376.42045,313.21022,427.64065Q250,478.86086,177.02087,437.40956Q104.04174,395.95826,83.07653,322.97913Q62.11131,250,80.39413,174.33848Q98.67695,98.67695,174.33848,72.96521Q250,47.25348,324.40956,74.21718Q398.81912,101.18088,412.31065,175.59044Q425.80218,250,401.11131,313.21022Z;",
    "M451.40312,325.40785Q400.81569,400.81569,325.40785,445.19943Q250,489.58318,194.33507,425.45652Q138.67013,361.32987,118.74291,305.66493Q98.81569,250,102.69423,178.28639Q106.57278,106.57278,178.28639,86.67958Q250,66.78639,319.11153,89.28166Q388.22306,111.77694,445.10681,180.88847Q501.99055,250,451.40312,325.40785Z;",
    "M386.5,309.5Q369,369,309.5,404.5Q250,440,164,431Q78,422,68.5,336Q59,250,68,163.5Q77,77,163.5,55Q250,33,307,84.5Q364,136,384,193Q404,250,386.5,309.5Z;",
    "M440,334.5Q419,419,334.5,411.5Q250,404,192,385Q134,366,83,308Q32,250,58.5,167.5Q85,85,167.5,48.5Q250,12,321.5,59.5Q393,107,427,178.5Q461,250,440,334.5Z;",
    "M434,332.5Q415,415,332.5,430.5Q250,446,195.5,402.5Q141,359,73,304.5Q5,250,65.5,188Q126,126,188,89Q250,52,319.5,81.5Q389,111,421,180.5Q453,250,434,332.5Z;",
    "M425.27203,329.75536Q409.51072,409.51072,329.75536,428.75417Q250,447.99762,170.7625,428.23631Q91.525,408.475,82.00357,329.2375Q72.48214,250,96.12053,184.87947Q119.75893,119.75893,184.87947,97.88185Q250,76.00476,333.73988,79.2625Q417.47976,82.52024,429.25655,166.26012Q441.03334,250,425.27203,329.75536Z;",
    "M443.145,332.49872Q414.99745,414.99745,332.49872,429.62823Q250,444.25902,183.1656,413.96391Q116.33121,383.66879,83.83248,316.8344Q51.33376,250,87.1656,186.49872Q122.99745,122.99745,186.49872,98.86793Q250,74.73842,318.92526,93.44395Q387.85053,112.14947,429.57154,181.07474Q471.29256,250,443.145,332.49872Z;",
];
function generatePath() {
    var res = [];
    for (let i = 0; i < 10; i++) {
        res.push(randomPath[Math.floor(Math.random() * randomPath.length)]);
    }
    res.push(res[0]);
    return res.join(" ");
}
function generateRotation() {
    var res = `rotate(${Math.floor(Math.random() * 360)}deg)`;
    console.log(res);
    return res;
}
function parseColor(color){
    return hexToRgb(color=="pink"?pastelPinkColor:(color=="blue"?pastelBlueColor:pastelVioletColor));
}
const useStyles = makeStyles(theme => ({
    position: {
        position: "absolute",
        zIndex: "-1000",
        height: "auto",
        width: "100px",
    },
}));

function BluePink() {
    return (
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" width="100%">
            <defs>
            <linearGradient id="gradient1">
                <stop offset="0%" style={{"stop-color": parseColor("blue")}}></stop>
                <stop offset="100%" style={{"stop-color": parseColor("pink")}}></stop>
                <animate attributeName="x1" dur="10s" repeatCount="indefinite"
                    values="0%;100%;100%;0%;0%"/>
                <animate attributeName="y1" dur="10s" repeatCount="indefinite"
                    values="0%;0%;100%;100%;0%"/>
                <animate attributeName="x2" dur="10s" repeatCount="indefinite"
                    values="100%;0%;0%;100%;100%"/>    
                <animate attributeName="y2" dur="10s" repeatCount="indefinite"
                    values="100%;100%;0%;100%;100%"/>      
            </linearGradient>
            </defs>
            <path id="blob" fill="url(#gradient1)">
                <animate attributeName="d" dur="20s" repeatCount="indefinite"
                values={generatePath()}
                >
                </animate>
            </path>
        </svg>
    );
}

function BlueViolet() {
    return (
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" width="100%">
            <defs>
            <linearGradient id="gradient2">
                <stop offset="0%" style={{"stop-color": parseColor("blue")}}>
                    
                </stop>
                <animate attributeName="x1" dur="10s" repeatCount="indefinite"
                    values="0%;100%;100%;0%;0%"/>
                <animate attributeName="y1" dur="10s" repeatCount="indefinite"
                    values="0%;0%;100%;100%;0%"/>
                <animate attributeName="x2" dur="10s" repeatCount="indefinite"
                    values="100%;0%;0%;100%;100%"/>    
                <animate attributeName="y2" dur="10s" repeatCount="indefinite"
                    values="100%;100%;0%;100%;100%"/> 
                <stop offset="100%" style={{"stop-color": parseColor("violet")}}></stop>
            </linearGradient>
            
            <img src="src/assets/images/edited.jpb" id="gradient"/>
            </defs>
            <path id="blob" fill="url(#gradient2)">
                <animate attributeName="d" dur="20s" repeatCount="indefinite"
                values={generatePath()}
                >
                </animate>
            </path>
        </svg>
    );
}

function PinkViolet() {
    return (
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink" width="100%">
            <defs>
            <linearGradient id="gradient4">
                <stop offset="0%" style={{"stop-color": parseColor("pink")}}></stop>
                <stop offset="100%" style={{"stop-color": parseColor("violet")}}></stop>
                <animate attributeName="x1" dur="10s" repeatCount="indefinite"
                    values="0%;100%;100%;0%;0%"/>
                <animate attributeName="y1" dur="10s" repeatCount="indefinite"
                    values="0%;0%;100%;100%;0%"/>
                <animate attributeName="x2" dur="10s" repeatCount="indefinite"
                    values="100%;0%;0%;100%;100%"/>    
                <animate attributeName="y2" dur="10s" repeatCount="indefinite"
                    values="100%;100%;0%;100%;100%"/> 
            </linearGradient>
            <img src="src/assets/images/edited.jpb" id="gradient3"/>
            </defs>
            <path id="blob" fill="url(#gradient3)">
                <animate attributeName="d" dur="20s" repeatCount="indefinite"
                values={generatePath()}
                >
                </animate>
            </path>
        </svg>
    );
}
function blob(props) {
    
    const classes = useStyles();
    const { type, ...other } = props;
    return (
        <SvgIcon {...other} className={[classes.position, "floating-blob"].join(" ")} >
            {type=="bluepink"?<BluePink/>:
            (type=="blueviolet"?<BlueViolet/>:
            <PinkViolet/>)}
        </SvgIcon>
  );
}
blob.propTypes = {
    type: PropTypes.oneOf(["bluepink","blueviolet","pinkviolet"])
};
export default blob;

