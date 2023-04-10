"use client";
import styled from "styled-components";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";
import Products from "./components/products/Products";
import Whatsapp from "./components/whatsapp/Whatsapp";
import Why from "./components/why/Why";

export default function Home() {
  return (
    <Container>
      <Header />
      <Headline />
      <Why />
      <Products />
      <About />
      <Footer />
      <Whatsapp />
    </Container>
  );
}

const Container = styled.main``;
