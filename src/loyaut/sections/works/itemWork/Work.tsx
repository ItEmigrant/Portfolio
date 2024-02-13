import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    src: string
    title: string
    text: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt={''}/>
            <TitleWork>{props.title}</TitleWork>
            <TextWork>{props.text}</TextWork>
            <Link href={'#'}>code</Link>
            <Link href={'#'}>demo</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    background-color: aqua;
    max-width: 540px;
    width: 100%;
    object-fit: cover;

`
const Image = styled.img`
    width: 100%;
    height: 260px;
`
const Link = styled.a`

`
const TitleWork = styled.h3`
`

const TextWork = styled.p`

`