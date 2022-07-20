import Banner from "./sections/Banner";
import Navbar from "./sections/Navbar";
import Servicos from "./sections/Servicos";
import SobreNos from "./sections/SobreNos";

export default function Layout() {
    return (
        <div>
            <Navbar/>
            <Banner />
            <SobreNos />
            <Servicos/>
        </div>
    )
}