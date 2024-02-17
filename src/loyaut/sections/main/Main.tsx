import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/myPhoto.jpg"
import {FlexWrapper} from "../../../components/flexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <StyledTextBlock>
                    <span>Hi There</span>
                    <StyledMainName>I am Bohdan Solomchak</StyledMainName>
                    <StyledMainTitle>Frontend developer</StyledMainTitle>
                </StyledTextBlock>

                <Photo src={photo} alt={'main photo'}/>
            </FlexWrapper>


        </StyledMain>
    );
};


const StyledMain = styled.section`
    min-height: 100vh;
    background-color: lightskyblue;
`
const StyledTextBlock = styled.div`

`
const StyledMainTitle = styled.h1`
`

const StyledMainName = styled.h2`
`
const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

