import React, { useEffect, useState } from 'react'
import '../Profile/Profile.scss'
import Axios from 'axios'

function Profile() {
    const userId = sessionStorage.getItem('userId')
    const token = sessionStorage.getItem('token')

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [fullName, setFulltName] = useState()
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        fullName: '',
        id:''
    })


    useEffect(() => {
        Axios.get('http://localhost:1234/api/v1/user/' + userId, {
            headers: {
                Authorization: `Bearer  ${token}`
            }
        })
            .then((res) => {
                console.log(res.data)
                setProfile({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    fullName: res.data.FullName,
                    id : userId
                })
                
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])
    const InputEvent = (event) => {
        console.log(event.target.value)
        const {name,value} = event.target;
        setProfile((preValue)=>{
                return {
                    ...preValue,
                    [name]:value,
                }
        })
    }
    const [message,setMessage] = useState()
    const updateForm = (event) =>{
            event.preventDefault()
            Axios.post('http://localhost:1234/api/v1/user',profile,{
                headers:{
                    Authorization : `Bearer ${token}`
                }
            })
            .then((response)=>{
                    console.log(response)
                    setMessage('Profile is updated Successful')
            }).catch((error)=>{
                console.log(error)
            })
    }

    return (
        <>
            <section className="loginForm py-5 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form className="formLogin profileform" onSubmit={updateForm}>
                      
                                <span className="text-success">{message}</span>
                                <div className="col-md-12 float-left">
                                    <div className="form-group text-center">
                                        <span className="profileImage rounded-circle d-inline-block"><img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="profile" /></span>
                                    </div>
                                </div>
                                <div className="col-md-6 float-left">
                                    <div className="form-group">
                                        <label className="w-100">First Name</label>
                                        <input className="form-control" type="text" placeholder="First Name" name="firstName" onChange={InputEvent} value={profile.firstName} />
                                    </div>
                                </div>

                                <div className="col-md-6 float-left">
                                    <div className="form-group">
                                        <label className="w-100">Last Name</label>
                                        <input className="form-control" type="text" placeholder="Last Name" onChange={InputEvent} name="lastName" value={profile.lastName} />
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
