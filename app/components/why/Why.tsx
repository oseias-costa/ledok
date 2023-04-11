"use client";
import Image from "next/image";
import styled from "styled-components";
import { CustomButton } from "../global/CustomButton";
import { content } from "../global/_content";
import { data } from "./_data";

export default function Why() {
  const Blocks = data.map((item) => {
    return (
      <Block key={item.id}>
        <Img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.content}</p>
      </Block>
    );
  });

  return (
    <Container id='PorqueAlugar'>
      <h2>Porque alugar da ledok?</h2>
      <WhyBlocks>{Blocks}</WhyBlocks>
      <CustomButton headline={false} href={content.link}>Quero mais informações</CustomButton>
    </Container>
  );
}

const Container = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    padding-bottom: 35px;
  }
`;

const WhyBlocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 20px;
`;

const Block = styled.div`
  max-width: 300px;
  padding: 14px;

  p {
    font-size: 11pt;
    font-weight: 300;
  }

  h3 {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 11pt;
  }

  @media(max-width: 740px){
    text-align: center;
  }
`;

const Img = styled(Image)`
  width: 76px;
  height: 76px;
`;
