import React, { useState } from 'react'
import {useHistory,Route,Redirect} from 'react-router-dom'
import './Login.css'
import Axios from 'axios';
import Home from '../Home/Home';
function Login() {
    const [user, setUser] = useState({
        mobile: '',
        password: ''
    })
    
    const inputEvent = (e) => {
        const { name, value } = e.target;
        setUser((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }
    const history = useHistory();
    //console.log(history)
    const [errorMessage,setErrorMessage] = useState();
    const onSubmit = (event) => {
        
        event.preventDefault();
        //console.log(user)
        const data = Axios.post('http://localhost:1234/api/v1/auth/login', { 'mobile': '+91' + user.mobile, 'password': user.password })
            .then(response => {
                if(response.status === 200){
                    history.push('/Home');
                }
            })
            .catch(error => {
                console.log('error')
                setErrorMessage('mobileNo or password is incorrect')
            })
    }
     return (

        <section className="loginForm py-5 position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form className="formLogin" onSubmit={onSubmit}>
                            <p className="text-danger">{errorMessage}</p>
                            <div className="form-group">
                                <label className="w-100">Mobile Number</label>
                                <input className="form-control" type="text" placeholder="Enter Number" name="mobile" onChange={inputEvent} value={user.mobile} />
                            </div>
                            <div className="form-group">
                                <label className="w-100">Password</label>
                                <input className="form-control" type="password" placeholder="Password" name="password" onChange={inputEvent} value={user.password} />
                            </div>
                            <div className="form-group mb-0">
                                <input className="form-control" type="submit" value="Submit" />
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
