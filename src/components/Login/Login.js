import React, { useState } from 'react'
import './Login.css'
function Login() {
    const [state, setState] = useState({
        mobile: '',
        password: ''
    })

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setState((preValue) => {
            return {
                ...preValue,
                [name]: value,
            }
        })
    }
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(state)
        
    }

    return (

        <section className="loginForm py-5 position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form className="formLogin" onSubmit={onSubmit}>
                            <div className="form-group">
                                <label className="w-100">Mobile Number</label>
                                <input className="form-control" type="text" placeholder="Enter Number" name="mobile" onChange={inputEvent} value={state.mobile} />
                            </div>
                            <div className="form-group">
                                <label className="w-100">Password</label>
                                <input className="form-control" type="password" placeholder="Password" name="password" onChange={inputEvent} value={state.password} />
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
