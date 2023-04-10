import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link className="navbar-brand" href="#">Full Stack Application</Link>
    <Link to="/adduser" className='ms-auto p-3'><button className='btn btn-outline-light'>
       Add User
    </button></Link>
    </nav>
    </div>
  )
}

export default NavBar