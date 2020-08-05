import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../Login/Login'
import Home from '../Home/Home'
import Profile from '../Profile/Profile'
import Logout from '../Logout/Logout';
import Protected from '../ProtectedRouter/ProtectedRouter'
import AddProduct from '../AddProduct/AddProduct';
import CategoryModal from '../Modal/CategoryModal'
import Cart from '../Cart/Cart'
function CommonRouter() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Login} />
                <Protected path="/home" component={Home} />
                <Protected path="/profile" component={Profile} />
                <Route path="/addproduct" component={AddProduct} />
                <Route path="/cart" component={Cart} />
                <Route path="/Logout" component={Logout} />
                
            </Switch>
        </>
    )
}

export default CommonRouter
