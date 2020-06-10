import React from 'react'
import { Container } from 'react-bootstrap'


 import styled from 'styled-components';


 const Styles = styled.div`
 *{
     margin-top: 11em;
 }
 
 `

export default function Layout(props) {
    return (
        <Styles>

        <Container>
            {props.children}
        </Container>
        </Styles>
    )
}
