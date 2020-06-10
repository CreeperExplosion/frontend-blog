import React from 'react'

import styled from 'styled-components'

import JumboHead from './component/JumboHead'
import LinkBar from './component/LinkBar'


const Styles = styled.div`
    {
        // text-align: justify;
        // text-justify: inter-word;
    }
`


export default function Home() {
    return (
        <Styles>
            <div>

                <JumboHead title="Ghibran's Blog" subtitle='where awesomeness fills the hole' />

                <LinkBar links={[
                    {text:"Featured Posts", action:()=>{console.log("hello")} },
                    {text:"Most Beloved",  action: ()=>{console.log("hello")} },
                    {text:"Most Discussed", action: ()=>{console.log("hello")} }
                ]} />

            Excepteur commodo est Lorem ut exercitation elit ex.
            Deserunt cillum minim velit ea sit sunt commodo cillum. Et nostrud duis incididunt sit eiusmod ullamco do ad consectetur et sint cupidatat. Dolor occaecat eiusmod commodo cupidatat tempor adipisicing pariatur cillum irure ex pariatur exercitation esse. Enim cupidatat quis elit proident do consequat eiusmod. Cillum culpa ipsum laborum ullamco reprehenderit nulla sit in fugiat tempor aute incididunt sint.
            </div>
        </Styles>
    )
}
