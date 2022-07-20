export default function NavbarItens(props){
    return (
        <span className={`
            font-semibold text-xl m-5 flex items-center
            text-verdeEscuro hover:text-azul
        `}>
            {props.titulo}
        </span>
    )
}