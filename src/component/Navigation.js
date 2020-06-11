import React from 'react'
import { Link } from 'react-router-dom'

import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

import Logo from '../resource/logo-white.png'

const Styles = styled.div`

.brand {
    text-decoration:none;
    margin:0;
}

img{
    max-width:3em;
    
    margin-top: -5px;
    margin-right: 1.5em;
}

`
export default function Navigation() {
    return (
        <Styles>
            <Navbar className='shadow' expand='sm'  bg="primary" variant="dark" fixed="top">
                    <div className='container'>
                        <Link className="brand" to="/">
                        <img src={Logo} alt='Fx'/>
                            <Navbar.Brand>
                                A<span className='text-weight-light text-lowercase'>lgebra's</span> <b>BLOG</b>
                            </Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='ml-3 mt-sm-1 '>
                                <Nav.Item>
                                    <Link to='/' className="nav-link">
                                        Home
                                    </Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to='/contact' className="nav-link">
                                        Contact
                                    </Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to='/about' className="nav-link">
                                        About me
                                    </Link>
                                </Nav.Item>

                            </Nav>
                        </Navbar.Collapse>
                    </div>
            </Navbar>
        </Styles>
    )
}
