"use client";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../../../public/logo-ledok.svg";

export default function Header() {
  return (
    <Container>
      <Img src={Logo} alt="Logo LEDOK" />
      <Menu>
        <a href="#PorqueAlugar">Porque Alugar</a>
        <a href="#Produtos">PRODUTOS</a>
        <a href="#QuemSomos">Quem Somos</a>
      </Menu>
    </Container>
  );
}

const Container = styled.header`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff9f9;
  box-shadow: 0px 1px 10px #ee1b23;
  z-index: 10;
`;

const Img = styled(Image)`
  width: 200px;
  height: 59px;
`;

const Menu = styled.div`
  a {
    font-family: var(--font-lemon-milk);
    color: black;
    font-size: 9.5pt;
    padding: 14px;
    text-transform: uppercase;
    font-weight: 300;
  }
  
  @media(max-width: 740px){
    display: none;
  }
  
`;
