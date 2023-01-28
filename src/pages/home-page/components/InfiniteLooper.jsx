import { useState, useEffect, useRef, useCallback } from 'react';
import React from 'react';

import "../assets/infiniteLooper.css"

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    looper: {
        width: "100%",
        overflow: "hidden",
    },
}))

export default function InfiniteLooper({ speed, direction, children, }) {
    const [looperInstances, setLooperInstances] = useState(1);
    const outerRef = useRef(null);
    const innerRef = useRef(null);
    function resetAnimation() {
        if (innerRef?.current) {
            innerRef.current.setAttribute("data-animate", "false");

            setTimeout(() => {
                if (innerRef?.current) {
                    innerRef.current.setAttribute("data-animate", "true");
                }
            }, 10);
        }
    }
    const setupInstances = useCallback(() => {
        if (!innerRef?.current || !outerRef?.current) return;
        const { width } = innerRef.current.getBoundingClientRect();
        const { width: parentWidth } = outerRef.current.getBoundingClientRect();
        const widthDeficit = parentWidth - width;
        const instanceWidth = width / innerRef.current.children.length;
        if (widthDeficit) {
            setLooperInstances(looperInstances + Math.ceil(widthDeficit / instanceWidth) + 1);
        }
        resetAnimation();
    }, [looperInstances]);

    useEffect(() => setupInstances(), [setupInstances]);
    useEffect(() => {
        window.addEventListener("resize", setupInstances);
        return () => {
            window.removeEventListener("resize", setupInstances);
        };
    }, [looperInstances, setupInstances]);

    const classes = useStyles()

    return (
        <div className={classes.looper} ref={outerRef}>
      <div className="looper__innerList" ref={innerRef} data-animate="true">
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
    )
}