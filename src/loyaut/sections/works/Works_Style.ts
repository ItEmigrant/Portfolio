import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexWrapper";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/Button";
import {Link} from "../../../components/Link";

const StyledWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`

//work
const ImageWrapper = styled.div`
    position: relative;

    &:hover {
        ${Button} {
            opacity: 1;
        }

        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(4px);
        }
    }

    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
        }
    }

`

const Description = styled.div`
    padding: 25px 20px;
`
const StyledWork = styled.div`
    background-color: ${theme.colors.secondaryBg};
    width: 330px;
    flex-grow: 1;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }

    @media ${theme.media.deskTop} {
        max-width: 540px;
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

export const S = {
    StyledWork,
    StyledWorks,
    ImageWrapper,
    Description,
    TextWork,
    TitleWork,
    Image
}