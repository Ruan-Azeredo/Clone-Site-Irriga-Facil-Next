import CardServico from "./CardServico";
import Paragrafo from "./Paragrafo";
import Titulos from "./Titulos";

export default function Servicos() {
    return (
        <div className={`
            bg-azul mt-20 h-screen pt-6
        `}>
            <Titulos titulo="Serviços" cor="white" corBarra="white" />
            <Paragrafo conteudo="loren inpsum, loren inpsum, loren inpsum." cor="white"
                className="justify-center mt-4" />
            
            <CardServico/>
        </div>
    )
}