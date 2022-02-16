import IconButton from "../components/IconButton"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { add, changeDescription, search } from "./todoActions"
import { Component } from "react"

class TodoForm extends Component {
    constructor(props){
        super(props)


    }

    componentDidMount(){
        this.props.search()
    }

    render(){
        const { add, search, descripton} = this.props
        return(
            <div className="flex my-3 w-full">
        <div className=" w-full mr-1">
            <input id="descripton" placeholder="Adicione uma tarefa"
                className=" border-2 rounded-md pl-2 mr-1 w-full"
                value={this.props.descripton}
                onChange={this.props.changeDescription}
             />
        </div>
        <div  className="flex">
            <IconButton icon="search" style=" mr-1 bg-blue-400 border-2  w-6 h-6 border-blue-600
             align-middle text-gray-100 rounded-md"
                 onClick={()=> search()}
             />
             <IconButton icon="plus" style=" mr-1 bg-blue-700 border-2  w-6 h-6 border-blue-600
             align-middle text-gray-100 rounded-md"
                 onClick={()=> add(descripton)}
             />
             <IconButton icon="close" style=" bg-blue-100 border-2  w-6 h-6 border-blue-200
             align-middle text-black-200 rounded-md"
                 onClick={this.props.handleClear}
             />
        </div>
    </div>
        )
    }
}


function mapStateToProps(state){
    return{
        descripton: state.todo.descripton
    }
}

const mapDispatchToProps = dispatch => 
    bindActionCreators({add, changeDescription, search}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)