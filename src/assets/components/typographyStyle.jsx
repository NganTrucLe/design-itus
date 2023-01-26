import {
    defaultFont,
    emphasisColor
} from '../globalStyle.jsx';

const typographyStyle = {
    body: {
        ...defaultFont,
    },
    caption: {
        ...defaultFont,
        fontSize: "0.75em",
        fontStyle: "italic"
    },
    emphasis: {
        color: emphasisColor,
    }
}

export default typographyStyle;