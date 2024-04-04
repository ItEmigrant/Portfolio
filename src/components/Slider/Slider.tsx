import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from './Slider_Styles'

type SlidePropsType = {
    text: string
    name: string
}

const Slide = (props:SlidePropsType ) => {
    return <S.Slide>
        <S.Text>{props.text}</S.Text>
        <S.Name>@{props.name}</S.Name>
    </S.Slide>
}

const items = [
    <Slide
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta dolorum earum ipsa        necessitatibus rem.'}
        name={'Bogdan'}/>,
    <Slide
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta dolorum earum ipsa       necessitatibus rem.'}
        name={'Artur'}/>,
    <Slide
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda dicta dolorum earum ipsa        necessitatibus rem.'}
        name={'Dastan'}/>,
];

export const Slider = () => (
        <S.StyledSlider>
            <AliceCarousel
                mouseTracking
                items={items}
            />
        </S.StyledSlider>
    )
;
/*import React from 'react';
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
};*/

