import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/myPhoto.jpg"
import {FlexWrapper} from "../../../components/flexWrapper";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
            <FlexWrapper align={'center'} justify={'space-between'}>
                <StyledTextBlock>
                    <SmallText>Hi There</SmallText>
                    <StyledMainName>I am Bohdan Solomchak</StyledMainName>
                    <StyledMainTitle>Frontend developer</StyledMainTitle>
                </StyledTextBlock>

                <Photo src={photo} alt={'main photo'}/>
            </FlexWrapper>
            </Container>
        </StyledMain>
    );
};


const StyledMain = styled.section`
    min-height: 100vh;
    background-color: lightskyblue;
    display: flex;
`
const StyledTextBlock = styled.div`

`
const StyledMainTitle = styled.h1`
    font-weight: 400;
    font-size: 27px;
    
    
`

const StyledMainName = styled.h2`
    font-family: 'Josefin Sans',serif;
    font-weight: 700;
    font-size: 50px;
    letter-spacing: 0.05em;
    
`

const SmallText = styled.span`
    font-weight: 400;
    font-size: 14px;

`
const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

