"use client";
import React from 'react'
import styled from 'styled-components'

export default function About() {
  return (
    <Container id='QuemSomos'>
        <h2>Quem Somos</h2>
        <p>Somos especialistas em fornecer soluções de placas de LED de alta qualidade para postos de gasolina, com anos de experiência e atendimento personalizado aos nossos clientes.</p>
    </Container>
  )
}

const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background: linear-gradient(180deg, #EE1B23 0%, #221F20 91.3%);
    padding-top: 83px; 
    padding-bottom: 83px; 

    h2 {
        color: #FEFEFE;
        padding-right: 63px;
    }

    p {
        color: #FEFEFE;
        font-weight: 300;
        max-width: 600px;
    }

    @media(max-width: 740px){
            p{
                padding: 20px;
                text-align: center;
            }
            h2 {
                padding: 0;
            }
        }
`