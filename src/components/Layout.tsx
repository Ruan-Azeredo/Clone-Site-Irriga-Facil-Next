import Banner from "./Banner";
import Navbar from "./Navbar";
import Servicos from "./Servicos";
import SobreNos from "./SobreNos";

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