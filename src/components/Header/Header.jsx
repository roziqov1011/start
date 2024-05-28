import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container d-flex justify-content-between">
                    <Link className="navbar-brand" href="#">Logo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/portfolio' className="nav-link" href="#">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/services' className="nav-link" href="#">services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link" href="#">contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/profle' className="nav-link" href="#">Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
