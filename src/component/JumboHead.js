import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'



const Styles = styled.div`
    .masthead{
        min-height:35vh;
    }

    .container{
        min-height:inherit;
    }

    .grid{
        min-height:inherit;
        display:grid;
        grid-template-colmns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;

        grid-template-areas: 
        "."
        "content"
        "."
    }

    .content{
        grid-area: content;
    }
`


export default function JumboHead(props) {
    return (
        <Styles>
            <div className='masthead'>
                <Container>

                    <div className='grid'>
                        <div className='content text-center'>
                            <h1>{props.title}</h1>
                            <p className='lead'>{props.subtitle}</p>
                        </div>
                    </div>
                </Container>
            </div>

        </Styles>
    )
}
