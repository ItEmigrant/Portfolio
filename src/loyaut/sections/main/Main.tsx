import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/myPhoto.jpg"
import {FlexWrapper} from "../../../components/flexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <StyledMainName>I am <span>Bohdan Solomchak</span></StyledMainName>
                        <StyledMainTitle>Frontend developer</StyledMainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt={'main photo'}/>
                    </PhotoWrapper>

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
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    margin-top: 65px;

    &::before {
        content: "";
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.MainColor};

        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;

        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -17px;
            left: 24px;

        }
    }
`
const StyledMainTitle = styled.h1`
    ${font({weight: 400, FMax: 27, FMin: 20})}

`

const StyledMainName = styled.h2`
    ${font({family: "'Josefin Sans', serif",weight: 700, FMax: 50, FMin: 36})}
    letter-spacing: 0.05em;
    margin: 10px 0;


    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;

        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};

            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
    
    
    @media ${theme.media.mobile} {
    margin: 15px 0 22px;
}
`

const SmallText = styled.span`
    font-weight: 400;
    font-size: 14px;

`


const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 20px;

    @media ${theme.media.mobile} {
        width: 310px;
        height: 380px;
    }
`