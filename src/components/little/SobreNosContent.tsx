import Paragrafo from "../Paragrafo";
import SobreNosMVVItens from "./SobreNosMVVItens";
import Titulos from "./Titulos";

export default function SobreNosContent() {
    return (
        <div className={`
                ml-[570px] flex relative top-[-420px] h-full flex-col
            `}>
            <Titulos titulo="Sobre Nós" cor="azul" corBarra="verdeMenosEscuro" />
            <div className="mx-[120px] mt-10">
                <Paragrafo conteudo="A IRRIGAFACIL é uma empresa de base tecnológica que atua
                no mercado com desenvolvimentos de soluções inovadoras para a agricultura." cor="azul" />
                <br/>
                <Paragrafo conteudo="Fundada em 2013 a IRRIGAFACIL é umas das poucas empresas brasileiras que
                trabalha exclusivamente com desenvolvimento, fabricação e comercialização
                de equipamentos para sistemas de irrigação automatizada, monitoramento e controle." cor="azul"/>
            </div>
            <div className={`flex justify-center`}>
                <SobreNosMVVItens titulo="Missão" conteudo="Fornecer aos nossos clientes o
                que há de mais moderno em equipamentos de automação para agricultura."/>
                <SobreNosMVVItens titulo="Visão" conteudo="Fornecer aos nossos clientes o
                que há de mais moderno em equipamentos de automação para agricultura."/>
                <SobreNosMVVItens titulo="Valores" conteudo="Fornecer aos nossos clientes o
                que há de mais moderno em equipamentos de automação para agricultura."/>
            </div>
        </div>
    )
}