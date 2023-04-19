import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'
import Plate1 from '../../../public/placa1.png'
import Plate2 from '../../../public/placa2.png'
import Plate3 from '../../../public/placa3.png'

export default function Slide() {
    const [counter, setCounter ] = useState(1)
    setInterval(() => {
        const plusCounter = counter + 1
        setCounter(plusCounter)
        if(counter > 2){
            setCounter(1)
        }
    }, 3500)

  return (
    <Container>
        <Img src={Plate1} alt='Placa em LED - LEDOK' className={`img ${ counter === 1 && 'show'}`} />
        <Img src={Plate2} alt='Placa em LED - LEDOK' className={`img ${ counter === 2 && 'show' }`} />
        <Img src={Plate3} alt='Placa em LED - LEDOK' className={`img ${ counter === 3 && 'show' }`} />
    </Container>
  )
}

const Container = styled.div`

    .img {
        opacity: 0;
        color: #fff;
        transition: 0.8s;
        position: absolute;
        top: 64px;
        left: 0;
        width: 874.84px;
        height: 400px;
        @media(max-width: 900px){
            width: 100%;
            height: auto;
        }
    }

    .show {
        opacity: 1;
    }
`

const Img = styled(Image)`
    
`