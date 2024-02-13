import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../flexWrapper";

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
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    border: 1px solid red;
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

`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        margin: 5px;
        background-color: red;
    }
`