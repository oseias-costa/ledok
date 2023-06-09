"use client";
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import WhatsSVG from '../../../public/whatsapp.svg'
import { content } from '../global/_content';

export default function Whatsapp() {
  return (
    <Whats>
        <a href={content.link} target='_blank'>
            <WhatsIcon src={WhatsSVG} alt='Link para o WhatsApp Ledok' />    
        </a>
    </Whats>
  )
}

const Whats = styled.div`
    z-index: 100;
    position: fixed;
    bottom: 2em;
    right: 2em;
    border-radius: 5em;
    padding: 0.3em;
    box-shadow: var(--shadow);
    background-color: #34af23;
    transition: 0.4s;

    &:hover{
        background-color: #2c901f;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
`

const WhatsIcon = styled(Image)`
    fill:  #fff;
    position: relative;
    right: -0.08em;
    top: 0.11em;
`