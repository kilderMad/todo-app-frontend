import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './index.css'

import React from 'react'
import Menu from './components/Menu'
import Rotas from './routes'

export default props => (

    <div className='container'>
            <Menu/>
            <Rotas/>
    </div>
)