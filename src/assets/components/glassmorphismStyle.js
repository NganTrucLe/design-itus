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
    background: "rgba(255, 255, 255, 0.4)",
    border: "2px solid #FFFFFF",
    /* BG blur */

    backdropFilter: "blur(12.5px)",
    /* Note: backdrop-filter has minimal browser support */
    borderRadius: "12px",
};
export {
    navBarStyle,
    cardStyle,
};