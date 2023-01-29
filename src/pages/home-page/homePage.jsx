import NavBar from "../../components/navBar"; 
import Partners from "./sections/partners";
import HeroBanner from "./sections/heroBanner";
import Quote from "./sections/quote";
import WhoAreWe from "./sections/whoAreWe";

const headerStyle = {
    fontWeight: 600, 
    fontSize: "32px",
    alignSelf: "center", 
    "@media (max-width: 600px)": {
        fontSize: "20px"
    },
}

export default function HomePage() {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <NavBar current = "/" />
            <HeroBanner />
            <WhoAreWe />
            <Quote />
            <Partners />
        </div>
    )
}

export {headerStyle}
