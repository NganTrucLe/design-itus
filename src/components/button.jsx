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
    } = props;
    return (
        <div>
            <Button variant="contained" className={classes.button}>{children}</Button>
        </div>
    );
};

RegularButton.propsType = {
    children: PropTypes.node,
};

export default RegularButton;
