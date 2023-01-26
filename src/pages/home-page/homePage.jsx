import Footer from "../../components/footer";
import NavBar from "../../components/navBar";

export default function HomePage() {
    return (
        <div style={{display: "flex"}}>
            <NavBar current = "/"/>
            <Footer />
        </div>
    )
}