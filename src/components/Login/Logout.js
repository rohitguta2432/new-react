import React from 'react'

function Logout() {
    localStorage.setItem('isAuthenticate',false)
    //sessionStorage.removeItem('isAuthenticate')
    return (
        <div>
            logout
        </div>
    )
}

export default Logout
