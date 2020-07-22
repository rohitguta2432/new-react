import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../Login/Login'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import Header from '../Headers/Header'
import Logout from '../Login/Logout'
function CommonRouter(props) {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/logout" component={Logout} />
            </Switch>
        </>
    )
}

export default CommonRouter
