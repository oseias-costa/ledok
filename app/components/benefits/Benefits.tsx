import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import BenefitsImg from "../../../public/benefits-plate.png";
import Check from "../../../public/check-ledok.png";
import { CustomButton } from '../global/CustomButton';
import { content } from '../global/_content';
import { data } from './_data';

export default function Benefits() {
    const BenefitsRows = data.map(item => {
        return(
            <BenefitsItem key={item.id}>
                <Image src={Check} alt={item.text} className='benefits__check' />
                <p className='benefits__item'>{item.text}</p>
            </BenefitsItem>
        )
    })
  return (
    <Container>
        <div className='benefitsBlock'>
            <BenefitsBlock>
                <h2>BENEFICIOS EM ALUGAR PLACAS DE LED ledok</h2>
                <BenefitsItems>
                    {BenefitsRows}
                </BenefitsItems>
                <CustomButton headline={false} href={content.link} className='btn'>solicite um orçamento</CustomButton>
            </BenefitsBlock>
            <Img src={BenefitsImg} alt='Ledok - Aluguel de Placas de LED' />
        </div>
    </Container>

  )
}

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 45px;
    padding-bottom: 45px;

    .benefitsBlock {
        background: #FFFFFF;
        box-shadow: 0px 4px 20px rgba(238, 27, 35, 0.3);
        max-width: 900px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`

const BenefitsBlock = styled.div`
    margin: 30px;
    padding-top: 30px;
    flex-direction: column;
    max-width: 320px;

    h2 {
        padding-bottom: 46px;
        color: #EE1B23;
    }

    .btn {
        text-align: center;
    }
`

const BenefitsItem = styled.div`
    display: flex;
    padding-bottom: 30px;

    .benefits__item {
        font-family: var(--font-lemon-milk);
        font-size: 14px;
        padding-left: 26px;
        color: #221F20;
    }

    .benefits__check {
        width: 22px;
        height: 22px;
        position: relative;
        top: 2px;
    }

`

const BenefitsItems = styled.div`
    padding-bottom: 20px;
`

const Img = styled(Image)`
    width: 500px;
    height: 583.36px;

    @media(max-width: 740px) {
     width: 320px;   
     height: 373.34px;   
     margin-bottom: 50px;
    }
`

