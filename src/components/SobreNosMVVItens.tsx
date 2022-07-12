

interface SobreNosMVVItensProps{
    titulo: string
    conteudo: string
}

export default function SobreNosMVVItens(props: SobreNosMVVItensProps) {
    return (
        <div className={`
            flex flex-col items-center mx-7 mt-5 title_mvv
        `}>
            <div className={`
                h-[60px] w-[60px] bg-azul rounded-full flex
                border-white border-2 z-10
            `}>

            </div>
            <div className={`
                bg-azul text-white font-semibold h-[50px] w-[140px]
                text-center flex items-center justify-center top-[-10px]
                relative m-0 bottom-0
            `}>
                {props.titulo}               
            </div>
            <div className={`
                bg-verdeMenosEscuro w-[140px] h-[10px] m-0 relative top-[-10px]
                text-sm text-white text-center p-2 mvv_animation
            `}>
                {props.conteudo}
            </div>
        </div>
    )
}