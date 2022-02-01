import IconButton from "../components/IconButton"

const TodoList = props =>{

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done? ' line-through text-green-600':''}>{todo.description}</td>
                <td><IconButton style=" w-2" icon='check' hide={todo.done}
                    onClick={()=> props.handleMarkAsDone(todo)}
                /></td>
                <td><IconButton style="w-2" icon='undo'
                    onClick={()=> props.handleMarkAsPending(todo)}
                /></td>
                <td><IconButton style="w-2" icon='trash-o'
                    onClick={()=> props.handleRemove(todo)}
                /></td>
            </tr>
        ))
    }

    return(
        <table className="w-full">
            <thead className="w-full">
                <tr className="flex w-full justify-between">
                    <th className="">Descricao</th>
                    <th className=" text-right">Acoes</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

export default TodoList