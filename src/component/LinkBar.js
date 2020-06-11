import React from 'react'

import {Link} from 'react-router-dom'

import styled from 'styled-components'
import { Container} from 'react-bootstrap'

const Styles = styled.div`
    .container{
        min-height:2em;
        display:flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
`

export default function LinkBar(props) {
    if (props.links == null) {
        return <Styles></Styles>
    }
    return (
        <Styles>
            <Container className='bg-dark text-light rounded mb-4'>
                {props.links.map((link , i) =>{
                    return (
                        <Link className='m-3 text-light' onClick={(event) => link.action(event)} to='#' key={i}>
                             {link.text}
                        </Link>
                    )
                })}
            </Container>
        </Styles>
    )
}
