import { Link } from "react-router-dom";


const PageHeader = props => (
    <div className="flex justify-between">
        <div className="flex">
            <h1>{props.titulo}</h1>
            <span className=" pl-3 pt-2">{props.descricao}</span>
        </div>
        <div className=" pt-1">
            <Link to="/todos">Voltar</Link>
        </div>
    </div>
)

export default PageHeader