import React from 'react';
import styled from "styled-components";

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta dolorum earum ipsa necessitatibus rem.</Text>
                <Name>@Bogdan</Name>
            </Slide>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    border: 1px solid red;
`

const Slide = styled.div`
`
const Text = styled.div`
`
const Name = styled.div`
`