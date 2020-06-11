import React from 'react'
import styled from 'styled-components'
import JumboHead from './component/JumboHead'
import LinkBar from './component/LinkBar'


const Styles = styled.div`
    {
        text-align:center;
    }
`

export default function Contact(props) {
    return (
        <Styles>
            <div className='mb-4'>
                < JumboHead title='Wanna contact me?' subtitle='look at my Github first !' />
                Veniam est non sit incididunt labore do veniam nulla eiusmod exercitation officia nulla eu nisi. Eu eiusmod quis
                excepteur adipisicing ut proident nulla. Voluptate dolor commodo eu sint mollit in. Minim voluptate Lorem sint ad
                dolor cupidatat officia commodo do aute enim aliqua ea
                cillum. Et est ut pariatur nostrud id anim nulla officia sunt nulla fugiat consectetur ea.
            </div>

            <LinkBar links={[{ text: "My Github Page", action: () => { window.location.href = "https://github.com/CreeperExplosion" } }]} />
            <hr />


            <h4> Wanna Email me ?</h4>
            <p>avicenaaljabbar@ghibran.xyz</p>

        </Styles>
    )
}
