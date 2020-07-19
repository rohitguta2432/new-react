import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Login from '../Login/Login'
import Home from '../Home/Home'

function CommonRouter() {
    return (
        <>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route  path="/home" component={Home} />
        </Switch>
        </>
        )
}

export default CommonRouter
