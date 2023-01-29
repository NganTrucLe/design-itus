// ##############################
// // // Function that converts from hex color to rgb color
// // // Example: input = #9c27b0 => output = 156, 39, 176
// // // Example: input = 9c27b0 => output = 156, 39, 176
// // // Example: input = #999 => output = 153, 153, 153
// // // Example: input = 999 => output = 153, 153, 153
// #############################
const hexToRgb = input => {
    input = input + "";
    input = input.replace("#", "");
    let hexRegex = /[0-9A-Fa-f]/g;
    if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
        throw new Error("input is not a valid hex color.");
    }
    if (input.length === 3) {
        let first = input[0];
        let second = input[1];
        let last = input[2];
        input = first + first + second + second + last + last;
    }
    input = input.toUpperCase(input);
    let first = input[0] + input[1];
    let second = input[2] + input[3];
    let last = input[4] + input[5];
    return ("rgb("+
        parseInt(first, 16) +
        ", " +
        parseInt(second, 16) +
        ", " +
        parseInt(last, 16)+")"
    );
};

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const section = {
    paddingRight: "16px",
    paddingLeft: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "60px",
    position: "relative",
    overflowX: "clip",
    overflowY: "visible",
    "@media (min-width: 600px)": {
        paddingRight: "40px",
        paddingLeft: "40px",
        gap: "60px",
    }, 
    "@media (min-width: 960px)": {
        paddingRight: "120px",
        paddingLeft: "120px",
        gap: "0px",
    }
}

const defaultFont = {
    fontFamily: '"Be Vietnam Pro", "Inter", "Avenir", "Helvetica", "Arial", "sans-serif"  ',
    fontSize: "16px",
    lineHeight: "24px",
}

const primaryColors = [
    "#D6DEF8",
    "#C2CFF4",
    "#A7B9EF",
    "#95ABEC",
    "#7B96E7",
    "#7089D2",
    "#576BA4",
    "#44537F",
    "#343F61"];

const neutralColors = [
    "#ECECEC",
    "#C3C3C3",
    "#A6A6A6",
    "#7D7D7D",
    "#646464",
    "#3D3D3D",
    "#383838",
    "#2B2B2B",
    "#222222",
    "#1A1A1A"];

const primaryColor = primaryColors[4];

const emphasisColor = primaryColor;
const whiteColor = '#fff';
const pastelPinkColor = '#F1BFDD';
const pastelBlueColor = '#B6DBF2';
const pastelVioletColor = primaryColor;
export {
    hexToRgb,
    section,
    defaultFont,
    primaryColors,
    neutralColors,
    primaryColor,
    emphasisColor,
    whiteColor,
    pastelPinkColor,
    pastelBlueColor,
    pastelVioletColor
};