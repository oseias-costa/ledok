"use client";
import styled from "styled-components";
import Image from "next/image";
import HeadlineImg from "../../../public/headline-image.png";
import { CustomButton } from "../global/CustomButton";
import { content } from "../global/_content";

export default function Headline() {
  return (
    <Container>
      <Img src={HeadlineImg} alt="LEDOK" />
      <Div>
        <h1>Economize tempo e dinheiro desde o primeiro dia</h1>
        <p>
          Não se preocupe com os custos iniciais, aluguel de placas de LED Ledok
          tem incluso suporte completo e manutenção.
        </p>
        <CustomButton href={content.link} headline={true} target='_blank'>Entrar em contato</CustomButton>
      </Div>
    </Container>
  );
}

const Container = styled.section`
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  z-index: -2;
`;

const Img = styled(Image)`
  width: 400px;
  height: 533px;
  @media(max-width: 740px){
    width: 250px;
    height: 333.33px;
  }
`;

const Div = styled.div`

  h1 {
    max-width: 550px;
  }
  p {
    color: #fefefe;
    font-weight: 300;
    padding-top: 20px;
    padding-bottom: 20px;
    max-width: 450px;
  }
  @media(max-width: 740px){
    text-align: center;
    margin-bottom: 63px;
    padding: 20px;
    position: relative;
    bottom: 30px;
  }
`;
