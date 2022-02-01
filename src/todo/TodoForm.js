import IconButton from "../components/IconButton"

const TodoForm = props =>(
    <div className="flex my-3 w-full">
        <div className=" w-full mr-1">
            <input id="descripton" placeholder="Adicione uma tarefa"
                className=" border-2 rounded-md pl-2 mr-1 w-full"
                value={props.descripton}
                onChange={props.handleChange}
             />
        </div>
        <div  className="flex">
            <IconButton icon="search" style=" mr-1 bg-blue-400 border-2  w-6 h-6 border-blue-600
             align-middle text-gray-100 rounded-md"
                 onClick={props.handleSearch}
             />
             <IconButton icon="plus" style=" mr-1 bg-blue-700 border-2  w-6 h-6 border-blue-600
             align-middle text-gray-100 rounded-md"
                 onClick={props.handleAdd}
             />
             <IconButton icon="close" style=" bg-blue-100 border-2  w-6 h-6 border-blue-200
             align-middle text-black-200 rounded-md"
                 onClick={props.handleClear}
             />
        </div>
    </div>
)

export default TodoForm