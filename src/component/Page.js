import React from 'react'
import { Container } from 'react-bootstrap'


 import styled from 'styled-components';


 const Styles = styled.div`
 {
     margin-top: 5em;
     font-size: 20px;
}
 
 `

export default function Page(props) {
    return (
        <Styles>
        <Container>
            {props.children}
        </Container>
        </Styles>
    )
}
