import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { CustomButton } from '../global/CustomButton'
import { content } from '../global/_content'
import { data } from './_data'

export default function Visible() {
    const blocks = data.map(item => {
        return (
            <Block key={item.id}>
                <Img src={item.image} alt={item.text} />
                <p>{item.text}</p>
            </Block>
        )
    })
  return (
    <Container>
        <h2>Melhore a visibilidade do seu posto com placas led de precificação</h2>
        <Blocks>{blocks}</Blocks>
        <CustomButton headline={false} href={content.link}>solicite um orçamento</CustomButton>
    </Container>
  )
}

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 75px;
    padding-bottom: 75px;

    h2 {
        max-width: 500px;
        text-align: center;
        padding-bottom: 26px;
    }
`

const Blocks = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
` 

const Block = styled.div`
    width: 350px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(238, 27, 35, 0.3);
    margin: 5px;

    p {
        font-family: var(--font-lemon-milk);
        font-weight: 500;
        font-size: 10pt;
        color: #221F20;
        text-align: center;
        padding: 25px;
    }

    @media(max-width: 740px){
        width: 300px;
    }
`

const Img = styled(Image)`
    width: 350px;
    height: 363.65px;

    @media(max-width: 740px) {
     width: 300px;   
     height: 311.7px;   
    }
`