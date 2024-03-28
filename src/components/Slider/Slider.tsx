import React from 'react';
import {FlexWrapper} from "../flexWrapper";
import {S} from './Slider_Styles'

export const Slider: React.FC = () => {
    return (
        <S.StyledSlider>
            <FlexWrapper>
                <S.Slide>
                    <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta dolorum earum ipsa
                        necessitatibus rem.</S.Text>
                    <S.Name>@Bogdan</S.Name>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span></span>
                <span className='Active'></span>
                <span></span>
            </S.Pagination>
        </S.StyledSlider>
    );
};

