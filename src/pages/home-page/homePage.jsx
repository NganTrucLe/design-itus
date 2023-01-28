import Footer from "../../components/footer";
import NavBar from "../../components/navBar";
import Button from "/src/components/button.jsx";
import NextArrowIcon from "/src/assets/icons/nextArrowIcon";
import Partners from "./sections/partners";
import HeroBanner from "./sections/heroBanner";
import Quote from "./sections/quote";

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
            <Quote />
            <Partners />
            <Footer />
            {/* <Button href="/about-us" endIcon={<NextArrowIcon/>}>Tìm hiểu thêm</Button> */}
        </div>
    )
}

export {headerStyle}
