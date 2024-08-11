import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Nav.css';

export default function Nav() {
    return (
        <>
          <nav>
            <ul>
              <li>
                <Link className="Link" to="/">Home</Link>
              </li>
              <li>
                <Link className="Link" to="/projects">Projects</Link>
              </li>
              <li>
                <Link className="Link" to="/education">Education</Link>
              </li>
              <li>
                <Link className="Link" to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
}
