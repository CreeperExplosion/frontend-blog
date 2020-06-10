import React from 'react'
import { Link } from 'react-router-dom'

import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'


const Styles = styled.div`

.brand {
    text-decoration:none;
}

`


export default function Navigation() {
    return (
        <Styles>
            <Navbar className='shadow' expand='md'  bg="dark" variant="dark" fixed="top">
                    <div className='container p-3'>
                        <Link className="brand">
                            <Navbar.Brand>
                                Algebra's <b>BLOG</b>
                            </Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='m-3 '>
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
