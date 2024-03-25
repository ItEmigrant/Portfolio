import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

const Main = styled.section`
    min-height: 100vh;
    background-color: lightskyblue;
    display: flex;
`
const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;


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

    @media ${theme.media.mobile} {
        margin-top: 65px;
    }

`
const MainTitle = styled.h1`
    ${font({weight: 400, FMax: 27, FMin: 20})}

`

const MainName = styled.h2`
    ${font({family: "'Josefin Sans', serif", weight: 700, FMax: 50, FMin: 36})}
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

export const S = {
    Main, MainName, MainTitle, PhotoWrapper, Photo, SmallText
}