import Image from "next/image";
import styled from "styled-components";
import Placa from "../../../public/placa.png";
import { CustomButton } from "../global/CustomButton";
import { content } from "../global/_content";

export default function Products() {
  return (
    <Container id='Produtos'>
      <Description>
        <h2>Nossos Produtos</h2>
        <p>
          Entre em contato e conheça nossa linha de placas de LED de alta
          qualidade para postos com recursos avançados para uma melhor
          eficiência e economia.
        </p>
        <CustomButton headline={false} href={content.link}>Quero Conhecer</CustomButton>
      </Description>
      <Img src={Placa} alt="Ledok" />
    </Container>
  );
}

const Container = styled.section`
  padding-top: 43px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Description = styled.div`
  max-width: 500px;
  padding-top: 100px;

  p {
    font-weight: 300;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media(max-width: 740px){
    padding: 20px;
    text-align: center;
  }
`;

const Img = styled(Image)`
  width: 400px;
  height: 533.33px;
  position: relative;
  top: 35px;
  z-index: -1;
  @media(max-width: 740px){
    width: 270px;
    height: 360px;
  }
`