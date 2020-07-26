import React from 'react'
import {Route,Redirect} from 'react-router-dom'


const ProtectedRoute =({component: Cmp,...reset}) => (
    <Route 
    {...reset}
    render={(props)=> (
        sessionStorage.getItem('logindetails') ? (<Cmp {...props} />) : <Redirect to="/" />
    )}
    />
)

export default ProtectedRoute
