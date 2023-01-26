import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';
import styles from '/src/assets/components/buttonStyle';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles(styles);
function RegularButton(props) {
    const classes = useStyle();
    const {
        children,
        endIcon,
        href
    } = props;
    return (
        <div>
            <Button href={props.href} endIcon={props.endIcon} className={classes.button}>{children}</Button>
        </div>
    );
};

RegularButton.propsType = {
    children: PropTypes.node,
    endIcon: PropTypes.node,
    href: PropTypes.string,
};

export default RegularButton;
