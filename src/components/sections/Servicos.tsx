import CardServico from "../little/CardServico";
import Paragrafo from "../Paragrafo";
import Titulos from "../little/Titulos";

export default function Servicos() {
    return (
        <div className={`
            bg-azul mt-20 pt-6 pb-1
        `}>
            <Titulos titulo="Serviços" cor="white" corBarra="white" />
            <Paragrafo conteudo="loren inpsum, loren inpsum, loren inpsum." cor="white"
                className="justify-center mt-4" />
            <div className={`
                grid gap-8 grid-cols-2 m-20
            `}>
                <CardServico/>
                <CardServico />
                <CardServico />
                <CardServico />
                <CardServico />
                <CardServico/>
            </div>
        </div>
    )
}