import IconButton from "../components/IconButton"

const TodoForm = props =>(
    <div className="flex my-3 w-full">
        <div className=" w-full mr-1">
            <input id="descripton" placeholder="Adicione uma tarefa"
                className=" border-2 rounded-md pl-2 mr-1 w-full"
            />
        </div>
        <div  className="">
            <IconButton icon="plus" style=" bg-blue-700 border-2  w-6 h-6 border-blue-600
             align-middle text-gray-100 rounded-md"
                 onClick={props.handleAdd}
             />
        </div>
    </div>
)

export default TodoForm