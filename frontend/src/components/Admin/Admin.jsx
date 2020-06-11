import React from 'react'
import './Admin.css'

const Admin = () => {
    return (
        <div className="container">
            <div className="admin-panel">
                <input type="text" placeholder="Enter your username" />
                <br />
                <input type="password" placeholder="Enter your email" />
                <br />
                <button type="submit">Submit</button>
            </div>
        </div>
    )
}

export default Admin
