import React from "react";
import { Route, Routes } from "react-router-dom";

import Todo from './todo/todo'
import About from "./about/About";

const Rotas = ()=>(
    <Routes>
        <Route path='/' element={<Todo/>}/>
        <Route path='/todos' element={<Todo/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<Todo/>}/>
    </Routes>
)

export default Rotas