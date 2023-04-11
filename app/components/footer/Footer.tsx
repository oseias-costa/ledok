import Image from 'next/image';
import React from 'react'
import styled from 'styled-components'
import Logo from "../../../public/logo-footer.png";
import Facebook from "../../../public/face.png";
import Instagram from "../../../public/insta.png";

export default function Footer() {
  return (
    <Container>
        <Img src={Logo} alt='Logo LEDOK - Comunição em Leds' />
        <Number>
            <p>contato@ledok.com.br</p>
            <p>(51)9 97959122</p>
        </Number>
        <Midias>
            <p>Nos acompanhe :</p>
            <div>
                <Image src={Facebook} alt='Facebook LEDOK' width={34} height={34} />
                <Image src={Instagram} alt='Instagram LEDOK' width={46} height={46} />
            </div>
        </Midias>
    </Container>
  )
}

const Container = styled.footer`
    background-color: #221F20;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 30px;

    @media(max-width: 740px){
        padding: 50px;
    }
`

const Img = styled(Image)`
    width: 200px;
    height: 51.41px;
`

const Number = styled.div`
    p {
        color: #fff9f9;
        font-weight: 300;
    }
    p:last-of-type{
        font-size: 14pt;
        padding-top: 3px;
    }
    @media(max-width: 740px){
        text-align: center;
        padding-top: 20px;
        padding-bottom: 20px;
    }
`

const Midias = styled.div`
     p {
        color: #fff9f9;
        font-weight: 300;
    }
    div {
        display: flex;
        align-items: center;
        @media(max-width: 740px){
            justify-content: center;
        }
    }
`