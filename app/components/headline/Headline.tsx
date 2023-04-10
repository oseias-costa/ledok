"use client";
import styled from "styled-components";
import Image from "next/image";
import HeadlineImg from "../../../public/headline-image.png";
import { CustomButton } from "../global/CustomButton";

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
        <CustomButton href="#" headline={true}>Entrar em contato</CustomButton>
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
  @media(max-width: 740px){
    padding: 20px;
  }
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
  max-width: 450px;
  p {
    color: #fefefe;
    font-weight: 300;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  @media(max-width: 740px){
    text-align: center;
    padding-bottom: 63px;
  }
`;