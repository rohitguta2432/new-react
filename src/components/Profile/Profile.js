import React from 'react'
import '../Profile/Profile.scss'
function Profile() {
    return (
        <>
            <section className="loginForm py-5 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="formLogin profileform" >

                                <div className="col-md-12 float-left">
                                    <div className="form-group text-center">
                                        <span className="profileImage rounded-circle d-inline-block"><img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="profile" /></span>
                                    </div>
                                </div>

                                <div className="col-md-6 float-left">
                                    <div className="form-group">
                                        <label className="w-100">First Name</label>
                                        <input className="form-control" type="text" placeholder="First Name" name="firstName" />
                                    </div>
                                </div>

                                <div className="col-md-6 float-left">
                                    <div className="form-group">
                                        <label className="w-100">Last Name</label>
                                        <input className="form-control" type="text" placeholder="Last Name" name="lastName" />
                                    </div>
                                </div>

                                <div className="col-md-6 float-left">
                                    <div className="form-group">
                                        <label className="w-100">Email</label>
                                        <input className="form-control" type="text" placeholder="Email" name="email" />
                                    </div>
                                </div>
                                
                                <div className="col-md-12 float-left">
                                    <div className="form-group mb-0">
                                        <input className="form-control" type="submit" value="Submit" />
                                    </div>
                                </div>
                                </form>
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile
