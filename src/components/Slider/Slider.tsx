import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../flexWrapper";
import {theme} from "../../styles/Theme";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta dolorum earum ipsa
                        necessitatibus rem.</Text>
                    <Name>@Bogdan</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span></span>
                <span className='Active'></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
    text-align: center;
`
const Text = styled.p`

`
const Name = styled.span`
    font-family: "Josefin Sans", sans-serif;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 22px 0 32px;
    display: inline-block;
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;
        border-radius: 20px;
        margin: 5px;
        background-color: rgba(255, 255, 255, 0.5);

        & + span {
            margin-left: 5px;
        }

        &.Active {
            background-color: ${theme.colors.accent};
            width: 20px;
        }
    }
`