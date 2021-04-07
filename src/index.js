import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import App from './App.jsx'

import {StateContextProvider} from './State'

ReactDOM.render(

<Router>
    <StateContextProvider>
        <App /> 
    </StateContextProvider>
    
</Router>


,document.getElementById('root'))
