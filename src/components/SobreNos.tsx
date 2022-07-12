import SobreNosContent from "./SobreNosContent";

export default function SobreNos() {
    return (
        <div className={`
            h-screen
        `}>
            <div className={`
                h-[180px] w-[120px] top-[280px] flex relative bg-azul
            `}></div>
            <div className={`
                h-[400px] w-[450px] top-[160px] ml-[120px] flex realtive bg-slate-400
            `}></div>
            <SobreNosContent/>
        </div>
    )
}