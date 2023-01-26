import NextArrorIcon from "../../assets/icons/nextArrowIcon";
import NavBar from "../../components/navBar";
import Button from "/src/components/button.jsx";
import NextArrowIcon from "/src/assets/icons/nextArrowIcon";
export default function HomePage() {
    return (
        <div>
            <NavBar current = "/"/>
            <Button href="/about-us" endIcon={<NextArrowIcon/>}>Tìm hiểu thêm</Button>
        </div>
    )
}
