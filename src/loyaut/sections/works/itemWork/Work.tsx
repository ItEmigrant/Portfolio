import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";

type WorkPropsType = {
    src: string
    title: string
    text: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt={''}/>
            <Description>
            <TitleWork>{props.title}</TitleWork>
            <TextWork>{props.text}</TextWork>
            <Link href={'#'}>code</Link>
            <Link href={'#'}>demo</Link>
            </Description>
        </StyledWork>
    );
};


const Description = styled.div`
padding: 25px 20px;
`
const StyledWork = styled.div`
    background-color: ${theme.colors.secondaryBg};
    max-width: 540px;
    width: 100%;

    ${Link} {
        padding: 10px 0;
    }
`
const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`
const TitleWork = styled.h3`
    
`

const TextWork = styled.p`
    margin: 14px 0 10px;
    
`