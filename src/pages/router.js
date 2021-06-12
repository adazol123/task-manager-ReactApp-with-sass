import React from "react"
import { Route, Switch } from "react-router"
import Home from "./Home"
import About from './About'
import PageNotFound from "./PageNotFound"
import TaskManager from "./TaskManager"
import Buttons from "./Buttons"

export const router = (params) => {
    return (
        <Switch>
            
        <Route path='/about' exact component={About}/>
        <Route path='/buttons' exact component={Buttons}/>
        <Route path='/task-manager' exact component={TaskManager}/>
        <Route path='/' exact component={Home}/>
        <Route  component={PageNotFound}/>
        </Switch>
    )
}
