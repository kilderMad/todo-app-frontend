import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => (
    <nav className=' text-2xl py-3 bg-slate-900 text-gray-100 mb-3 rounded-md'>
        <div className="container flex">
            <div className='pr-7'>
                <a href="#">
                    <i className="fa fa-calendar-check-o"></i> TodoApp
                </a>
            </div>
            <div >
                <ul className='flex' >
                 <li className='pr-7'>
                    <Link to="/todos">Tarefas</Link>
                 </li>
                 <li>
                    <Link to="/about">Sobre</Link>
                 </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Menu