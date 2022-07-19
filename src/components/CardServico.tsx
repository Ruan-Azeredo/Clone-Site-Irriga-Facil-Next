import Paragrafo from "./Paragrafo";
import React from "react";
import { Cog } from "../../node_modules/heroicons-react/build/index";

export default function CardServico() {
    return (
        <div className={`
            bg-white flex flex-row p-5
        `}>
            <div className="flex self-center p-3">
                <div className={`
                    text-verdeMenosEscuro font-bold 
                `}><Cog size={80}/></div>
            </div>
            <div className="p-3">
                <h3 className="text-verdeMenosEscuro font-medium">Titulo do Serviço</h3>
                <Paragrafo conteudo="Descrição curta do serviço, loren inpsum, loren inpsum, loren inpsum. loren inpsum, loren inpsum, loren. Descrição curta do serviço, loren inpsum, loren inpsum."
                cor="#443D3D"/>
            </div>
        </div>
    )
}