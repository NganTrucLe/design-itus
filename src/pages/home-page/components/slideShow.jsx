import { makeStyles } from "@material-ui/core";
import { useState, useRef, useEffect } from "react";

import banner0 from "../assets/heroBanner/tanSV.png"
import banner1 from "../assets/heroBanner/tanSV1.png"
import banner2 from "../assets/heroBanner/tanSV2.png"

const images = [banner0, banner1, banner2]

const delay = 3000;

const useStyles = makeStyles((theme) => ({
    slideshow: {
        overflow: "hidden", 
        [theme.breakpoints.down("xs")]: {
            marginTop: "4em"
        },
    },
    slideShowSlider: {
        whiteSpace: "nowrap",
        transition: "ease 1000ms"
    },
    images: {
        display: "inline-block",
        width: "100%",
    },
    image: {
        width: "100%"
    },
    slideshowDots: {
        display: "flex",
        justifyContent: "center",
        gap: "8px",
        position: "relative",
        marginTop: "-100px",
        marginBottom: "100px",
        [theme.breakpoints.down("sm")]: {
            marginTop: "-28px",
            marginBottom: "28px",
        },
    },
    dot: {
        display: "inline-block",
        height: "8px",
        width: "8px",
        borderRadius: "50%",
        cursor: "pointer",
        background: "rgba(217, 217, 217, 0.5)"
    },
    dotActive: {
        background: "#D9D9D9"
    }
}))

export default function Slideshow() {
    const [index, setIndex] = useState(0)
    const timeoutRef = useRef(0)

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    const classes = useStyles()

    return (
        <div className={classes.slideshow}>
            <div
                className={classes.slideShowSlider}
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {images.map((image, index) => (
                    <div
                        className={classes.images}
                        key={index}
                    >
                        <img src={image} alt="Ngày hội Tân sinh viên" className={classes.image} />
                    </div>
                ))}
            </div>

            <div className={classes.slideshowDots}>
                {images.map((_, idx) => (
                    <>
                        {index !== idx ?
                            <div
                                key={idx}
                                className={classes.dot}
                                onClick={() => {
                                    setIndex(idx);
                                }}
                            >
                            </div>
                            :
                            <div
                                key={idx}
                                className={[classes.dot, classes.dotActive].join(' ')}
                                onClick={() => {
                                    setIndex(idx);
                                }}
                            >
                            </div>
                        }
                    </>
                ))}
            </div>
        </div>
    );
}