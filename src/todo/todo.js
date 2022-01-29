import React, { Component } from "react";
import PageHeader from '../components/PageHeader'
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class Todo extends Component {
    handlerAdd(){
        console.log('oi botao')
    }


    render(){
        return (
            <div>
                <PageHeader titulo="Todo" descricao="Cadastro"/>
                <TodoForm handlerAdd={this.handlerAdd}/>
                <TodoList/>
            </div>
        )
    }
}

export default Todo