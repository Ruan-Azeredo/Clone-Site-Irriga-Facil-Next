interface TitulosProps{
    cor: string
    titulo: string
    corBarra: string
}

export default function Titulos(props:TitulosProps) {
    return (
        <div className="flex justify-center flex-col">
            <h2 className={`
                flex font-bold text-4xl mx-auto text-${props.cor}
            `}>{props.titulo}</h2>
            <div className={`
                bg-${props.corBarra} h-[6px] w-[60px] mx-auto mt-1
            `}></div>
        </div>
    )
}