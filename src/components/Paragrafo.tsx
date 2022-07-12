interface ParagrafoProps{
    conteudo: string
    cor: string
    className?: string
}

export default function Paragrafo(props: ParagrafoProps) {
    return (
        <p className={`
            flex relative text-${props.cor} font-base text-justify ${props.className}
        `}>
            {props.conteudo}
        </p>
    )
}