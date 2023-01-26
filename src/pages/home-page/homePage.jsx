import Footer from "../../components/footer";
import NavBar from "../../components/navBar";
import Button from "/src/components/button.jsx";
import NextArrowIcon from "/src/assets/icons/nextArrowIcon";
export default function HomePage() {
    return (
        <div style={{display: "flex"}}>
            <NavBar current = "/"/>
            <Footer />
            {/* <Button href="/about-us" endIcon={<NextArrowIcon/>}>Tìm hiểu thêm</Button> */}
        </div>
    )
}
