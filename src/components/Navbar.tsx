import NavbarItens from "./NavbarItens";

export default function Navbar() {
    return (
        <div className={`
            h-[100px] flex items-center justify-center
            shadow-md
        `}>
            <img src="/Camada_x0020_1.svg" alt="Logo Irriga-Facil"
                className={`
                    mr-[120px] h-[75px] flex
                `}
            />
            <div className={`flex items-center mr-10`}>
                <NavbarItens titulo='Início' />
                <NavbarItens titulo='Serviços' />
                <NavbarItens titulo='Sobra Nós' />
                <NavbarItens titulo='Parceiros' />
                <NavbarItens titulo='Portifolio' />
                <NavbarItens titulo='Blog' />
                <NavbarItens titulo='Contato'/>
            </div>
        </div>
    )
}