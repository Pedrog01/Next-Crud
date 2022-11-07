import Titulo from "./Titulo"

interface LayoutProps{
    titulo : string
    children : any
}

export default function Layout(props : LayoutProps){
return (
    <div className={`
        flex flex-color w-2/3s
        bg-white text-gray-800 rounded-md
    `}>
        <Titulo>{props.titulo}</Titulo>
        <div className="p-6">
            {props.children}
        </div>
    </div>
)

}