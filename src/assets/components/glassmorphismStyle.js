const navBarStyle = {
    padding: "16px 120px",
    background: "rgba(255, 255, 255, 0.2)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottom: "2px solid white",
    backdropFilter: "blur(5px)",
};
const cardStyle = {
    background: "rgba(255, 255, 255, 0.4) !important",
    border: "2px solid #FFFFFF !important",
    /* BG blur */

    backdropFilter: "blur(12.5px) !important",
    /* Note: backdrop-filter has minimal browser support */
    borderRadius: "12px",
    padding: "20px",
    "@media (max-width: 960px)": {
        padding: "12px"
    }

};
export {
    navBarStyle,
    cardStyle,
};