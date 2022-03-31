import React from 'react'
import { Link } from 'react-router-dom'
export default function NavLink() {
  return (
    <div className="bg-dark text-white text-center p-3">
    <Link className="m-2" to="/about">
      About
    </Link>
    <Link className="m-2" to="/contact">
      Contact
    </Link>
    <Link className="m-2" to="/services">
      Login
    </Link>
  </div>
  )
}
