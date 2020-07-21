import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../Login/Login'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import Header from '../Headers/Header'
function CommonRouter(props) {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </>
    )
}

export default CommonRouter
